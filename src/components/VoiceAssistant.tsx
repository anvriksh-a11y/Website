import { useState, useEffect, useRef } from 'react';

// Provider credentials removed from client bundle for security.
// Voice and STT/TTS requests must be routed through a secure authenticated backend proxy.
const GROQ_API_KEY = "";
const DEEPGRAM_API_KEY = "";

const SYSTEM_PROMPT = `
You are the official Voice AI Assistant for ANVRiksh Tech Solutions LLP.
Website: https://anvriksh.com/
Founder & CEO: Raj Mange

### RULES FOR VOICE:
1. Keep answers VERY SHORT (1-2 sentences maximum). You are speaking aloud to the user.
2. Be highly friendly, enthusiastic, and conversational.
3. Do not use formatting symbols or lists. Speak naturally like a human.
4. IMPORTANT: If you do not know the answer to a question, DO NOT guess or make up information. Instead, strictly reply with: "I'm sorry, I don't have that information. For more details, please contact us at info@anvriksh.com or call us at +91 9980113561."

### MAIN SOLUTIONS:
- CRM Calling Agent
- LinkedIn Automation
- WhatsApp Booking
- Blockchain FTP
- Fake Video Analyzer
- Earthquake Prediction
- Business Web Builder
- Agentic & Generative AI Custom Development

### CONTACT:
Phone: +91 9980113561
Email: info@anvriksh.com
`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const VoiceAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [liveTranscript, setLiveTranscript] = useState('');
  
  const recognitionRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const transcriptTimeoutRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, liveTranscript]);

  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.error("Speech Recognition API not supported in this browser.");
      return;
    }

    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch (e) {}
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'en-US';
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      let finalTranscript = '';
      let interimTranscript = '';

      // Because this is a fresh instance every time, we can safely loop from 0
      for (let i = 0; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      const currentDisplay = (finalTranscript + ' ' + interimTranscript).trim();
      setLiveTranscript(currentDisplay);

      if (transcriptTimeoutRef.current) clearTimeout(transcriptTimeoutRef.current);
      
      transcriptTimeoutRef.current = setTimeout(() => {
        if (currentDisplay) {
          console.log("Processing final text:", currentDisplay);
          setIsListening(false);
          setLiveTranscript('');
          recognition.stop();
          
          setMessages(prev => [...prev, { role: 'user', content: currentDisplay }]);
          processWithGroq(currentDisplay);
        }
      }, 1500); // Wait 1.5 seconds of silence
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
      setLiveTranscript('');
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    
    try {
      recognition.start();
      setIsListening(true);
    } catch (e) {
      console.error("Could not start recognition:", e);
    }
  };

  const toggleInterface = () => {
    setShowWelcome(false);
    
    if (!isOpen) {
      setIsOpen(true);
      if (messages.length === 0) {
        const welcomeText = "Welcome to ANVRiksh Tech Solutions LLP! I'm your dedicated voice assistant. How can I help you explore our AI agents today?";
        setMessages([{ role: 'assistant', content: welcomeText }]);
        speak(welcomeText);
      }
    } else {
      if (isListening) {
        recognitionRef.current?.stop();
        setIsListening(false);
        setLiveTranscript('');
      } else {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }
        setIsSpeaking(false);
        startListening();
      }
    }
  };

  const processWithGroq = async (text: string) => {
    setIsThinking(true);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: SYSTEM_PROMPT
            },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: text }
          ],
          temperature: 0.7,
          max_tokens: 150
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`API Error ${response.status}: ${errText}`);
      }

      const data = await response.json();
      
      if (data.choices && data.choices.length > 0) {
        const aiText = data.choices[0].message.content;
        setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
        speak(aiText);
      } else {
        console.error("Invalid response format:", data);
        const errText = "I'm sorry, I couldn't understand the response.";
        setMessages(prev => [...prev, { role: 'assistant', content: errText }]);
        speak(errText);
      }
    } catch (error) {
      console.error("Error communicating with Groq:", error);
      const errText = "I'm sorry, there was a network error connecting to my brain.";
      setMessages(prev => [...prev, { role: 'assistant', content: errText }]);
      speak(errText);
    } finally {
      setIsThinking(false);
    }
  };

  const speakFallback = (text: string) => {
    if (!window.speechSynthesis) {
      console.error("speechSynthesis not supported");
      setIsSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1.05;
    utterance.pitch = 1.0;

    // Pick a natural-sounding voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Microsoft') || v.name.includes('Samantha'))
    );
    if (preferred) utterance.voice = preferred;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const speak = async (text: string) => {
    setIsSpeaking(true);
    
    const deepgramKey = DEEPGRAM_API_KEY;
    
    if (!deepgramKey) {
      console.warn("Deepgram API key missing — using browser TTS fallback");
      speakFallback(text);
      return;
    }

    try {
      const response = await fetch('https://api.deepgram.com/v1/speak?model=aura-asteria-en', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${deepgramKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      });

      if (!response.ok) {
        console.warn(`Deepgram TTS failed (${response.status}) — using browser TTS fallback`);
        speakFallback(text);
        return;
      }

      const audioBlob = await response.blob();

      // Guard: blob must be audio, not an error JSON
      if (!audioBlob.type.startsWith('audio')) {
        console.warn("Deepgram returned non-audio content — using browser TTS fallback");
        speakFallback(text);
        return;
      }

      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio.onended = () => {
        setIsSpeaking(false);
        audioRef.current = null;
        URL.revokeObjectURL(audioUrl);
      };

      audio.onerror = (e) => {
        console.warn("Audio playback error — using browser TTS fallback", e);
        setIsSpeaking(false);
        audioRef.current = null;
        speakFallback(text);
      };

      try {
        await audio.play();
      } catch (playErr) {
        console.warn("audio.play() blocked — using browser TTS fallback", playErr);
        speakFallback(text);
      }
    } catch (error) {
      console.error("Deepgram fetch error — using browser TTS fallback:", error);
      speakFallback(text);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      
      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[320px] h-[400px] bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in mb-2">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                <i className="fas fa-robot text-white text-xs"></i>
              </div>
              <div>
                <h3 className="text-white font-medium text-sm leading-tight">ANVRiksh Voice AI</h3>
                <p className="text-green-400 text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-sm shadow-md' 
                  : 'bg-white/10 backdrop-blur-sm text-gray-100 rounded-bl-sm border border-white/5 shadow-md'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            
            {/* Live Transcript Bubble */}
            {liveTranscript && (
              <div className="flex justify-end animate-pulse">
                <div className="max-w-[85%] p-3 rounded-2xl text-sm bg-blue-600/50 text-white rounded-br-sm border border-blue-400/50 italic shadow-md">
                  {liveTranscript}
                </div>
              </div>
            )}

            {/* Thinking Indicator */}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-2xl rounded-bl-sm border border-white/5 flex gap-1 items-center shadow-md">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            
            {/* Speaking Indicator */}
            {isSpeaking && !isThinking && (
               <div className="flex justify-start opacity-70">
                 <div className="flex gap-1 items-end h-4">
                    <div className="w-1 bg-green-400 animate-[bounce_1s_infinite_100ms] h-full"></div>
                    <div className="w-1 bg-green-400 animate-[bounce_1s_infinite_300ms] h-1/2"></div>
                    <div className="w-1 bg-green-400 animate-[bounce_1s_infinite_500ms] h-3/4"></div>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}

      {/* Welcome Message Bubble (Only show if closed) */}
      {!isOpen && showWelcome && (
        <div className="absolute bottom-full mb-4 left-0 w-52 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm px-4 py-3 rounded-2xl shadow-xl z-50 animate-fade-in border border-white/10">
          <p className="font-medium leading-tight">Talk to ANVRiksh AI 👋</p>
          <div className="absolute -bottom-2 left-6 w-4 h-4 bg-blue-600 transform rotate-45"></div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowWelcome(false);
            }}
            className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-500 shadow-md transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}

      {/* Main Button */}
      <div className="relative group">
        {isListening && isOpen && (
          <div className="absolute inset-0 bg-red-500/50 rounded-full animate-ping"></div>
        )}
        <button
          onClick={toggleInterface}
          className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300 border border-white/10 ${
            isOpen 
              ? isListening
                ? 'bg-gradient-to-br from-red-500 to-pink-600 scale-110 shadow-[0_0_30px_rgba(239,68,68,0.6)]' 
                : 'bg-gradient-to-br from-slate-700 to-slate-800 border-white/20'
              : 'bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]'
          }`}
          aria-label="Voice Assistant"
        >
          {isOpen ? (
             isListening ? (
              <i className="fas fa-microphone-slash text-white text-2xl drop-shadow-md"></i>
             ) : (
              <i className="fas fa-microphone text-white text-2xl drop-shadow-md"></i>
             )
          ) : (
            <i className="fas fa-robot text-white text-2xl drop-shadow-md"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default VoiceAssistant;
