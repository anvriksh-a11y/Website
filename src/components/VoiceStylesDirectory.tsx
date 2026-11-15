import React, { useState, useEffect, useRef } from 'react';

export interface VoiceStyle {
  id: string;
  name: string;
  role: string;
  tone: string;
  category: 'E-learning' | 'Customer Support' | 'Video Narration' | 'Podcasting' | 'Calling Agent';
  gender: 'Female' | 'Male';
  language: string;
  avatarBg: string;
  avatarImg: string;
  sampleText: string;
  audioSrc: string;
}

export const VOICE_STYLES: VoiceStyle[] = [
  // ROW 1: Aarohi, Aarav, Maya
  {
    id: 'aarohi',
    name: 'Aarohi',
    role: 'Soft & natural',
    tone: 'Conversational, empathetic, soothing',
    category: 'Customer Support',
    gender: 'Female',
    language: 'Kannada',
    avatarBg: 'from-[#003D2B] to-[#526B3D]',
    avatarImg: '/images/avatars/ns-avatar-16.png',
    sampleText: 'ನಮಸ್ಕಾರ! ANVRiksh ತಂತ್ರಜ್ಞಾನ ಸೇವೆಗಳಿಗೆ ಸುಸ್ವಾಗತ. ನಿಮ್ಮ ಯೋಜನೆಗೆ ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?',
    audioSrc: '/audio/anvriksh_kn.wav',
  },
  {
    id: 'aarav',
    name: 'Aarav',
    role: 'Bold & energetic',
    tone: 'Dynamic, persuasive, high-impact',
    category: 'Calling Agent',
    gender: 'Male',
    language: 'Hindi',
    avatarBg: 'from-[#2D452C] to-[#003D2B]',
    avatarImg: '/images/avatars/ns-avatar-15.png',
    sampleText: 'नमस्ते! क्या आप अपने बिज़नेस के लिए ऑटोनॉमस AI कॉलिंग एजेंट शुरू करने के लिए तैयार हैं?',
    audioSrc: '/audio/bca_internship_hi.wav',
  },
  {
    id: 'maya',
    name: 'Maya',
    role: 'Warm & calm',
    tone: 'Gentle, mindful, articulate',
    category: 'E-learning',
    gender: 'Female',
    language: 'Indian English',
    avatarBg: 'from-[#8B7355] to-[#A68A68]',
    avatarImg: '/images/avatars/ns-avatar-17.png',
    sampleText: 'Welcome to ANVRiksh academic counseling. Let us explore your prospective curriculum tracks.',
    audioSrc: '/audio/bca_internship_en.wav',
  },
  // ROW 2: Ishaan, Zoya, Dhruv, Naveen
  {
    id: 'ishaan',
    name: 'Ishaan',
    role: 'Clear & crisp',
    tone: 'Authoritative, technical, crisp',
    category: 'Podcasting',
    gender: 'Male',
    language: 'Indian English',
    avatarBg: 'from-[#141912] to-[#2D452C]',
    avatarImg: '/images/avatars/ns-avatar-29.png',
    sampleText: 'Welcome to Deep Tech Insights. Today we evaluate autonomous neural routing and sub-second latency.',
    audioSrc: '/audio/deep_courses_en.wav',
  },
  {
    id: 'zoya',
    name: 'Zoya',
    role: 'Bright & Light',
    tone: 'Friendly, youthful, expressive',
    category: 'Video Narration',
    gender: 'Female',
    language: 'Hindi',
    avatarBg: 'from-[#526B3D] to-[#8B7355]',
    avatarImg: '/images/avatars/ns-avatar-28.png',
    sampleText: 'ANVRiksh एंटरप्राइज सपोर्ट में आपका स्वागत है। हमारे AI एजेंट्स 24 घंटे आपकी सेवा में उपलब्ध हैं।',
    audioSrc: '/audio/anvriksh_hi.wav',
  },
  {
    id: 'dhruv',
    name: 'Dhruv',
    role: 'Confident & Crispy',
    tone: 'Executive, trustworthy, polished',
    category: 'Calling Agent',
    gender: 'Male',
    language: 'Marathi',
    avatarBg: 'from-[#003D2B] to-[#141912]',
    avatarImg: '/images/avatars/ns-avatar-31.png',
    sampleText: 'नमस्कार! ANVRiksh च्या व्यवसाय सोल्यूशन्स टीमकडून आम्ही आपले स्वागत करतो.',
    audioSrc: '/audio/anvriksh_mh.wav',
  },
  {
    id: 'naveen',
    name: 'Naveen',
    role: 'Warm & consultative',
    tone: 'Patient, helpful, consultative',
    category: 'Customer Support',
    gender: 'Male',
    language: 'Kannada',
    avatarBg: 'from-[#698F70] to-[#003D2B]',
    avatarImg: '/images/avatars/ns-avatar-32.png',
    sampleText: 'ನಾನು ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ. ಸೆಟಪ್ ಹಂತಗಳನ್ನು ವಿವರಿಸುತ್ತೇನೆ.',
    audioSrc: '/audio/bca_internship_kn.wav',
  },
  // ROW 3: Charu, Lavanya, Omkar
  {
    id: 'charu',
    name: 'Charu',
    role: 'Cool & friendly',
    tone: 'Modern, engaging, lifestyle',
    category: 'Video Narration',
    gender: 'Female',
    language: 'Indian English',
    avatarBg: 'from-[#8B7355] to-[#526B3D]',
    avatarImg: '/images/avatars/ns-avatar-35.png',
    sampleText: 'Check out the ANVRiksh AI Calling Platform built with sub-second multilingual speech synthesis.',
    audioSrc: '/audio/ai-voice-generator-voice-sample.mp3',
  },
  {
    id: 'lavanya',
    name: 'Lavanya',
    role: 'Gentle & dreamy',
    tone: 'Intimate, literary, immersive',
    category: 'E-learning',
    gender: 'Female',
    language: 'Kannada',
    avatarBg: 'from-[#526B3D] to-[#141912]',
    avatarImg: '/images/avatars/ns-avatar-33.png',
    sampleText: 'ದೂರಶಿಕ್ಷಣ ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ ನಿಮ್ಮ ವೃತ್ತಿಜೀವನವನ್ನು ಮುಂದುವರಿಸಿ ಮತ್ತು ಹೊಸ ಕೌಶಲ್ಯಗಳನ್ನು ಕಲಿಯಿರಿ.',
    audioSrc: '/audio/distance_education_kn.wav',
  },
  {
    id: 'omkar',
    name: 'Omkar',
    role: 'Clear & dynamic',
    tone: 'Enthusiastic, rapid, sharp',
    category: 'Podcasting',
    gender: 'Male',
    language: 'Kannada',
    avatarBg: 'from-[#003D2B] to-[#698F70]',
    avatarImg: '/images/avatars/ns-avatar-34.png',
    sampleText: 'ಆರ್ಟಿಫಿಶಿಯಲ್ ಇಂಟೆಲಿಜೆನ್ಸ್ ಮತ್ತು ಕ್ಲೌಡ್ ತಂತ್ರಜ್ಞಾನದಲ್ಲಿ ಹೊಸ ಕೋರ್ಸ್‌ಗಳು ಈಗ ಲಭ್ಯವಿದೆ.',
    audioSrc: '/audio/deep_courses_kn.wav',
  },
];

// Reusable Voice Pill Card Component matching user reference image
const VoicePillCard: React.FC<{
  voice: VoiceStyle;
  isSelected: boolean;
  isPlaying: boolean;
  onClick: () => void;
  isThreeCardRow?: boolean;
}> = ({ voice, isSelected, isPlaying, onClick, isThreeCardRow = false }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-start rounded-full border bg-white py-1 transition-all duration-300 group hover:scale-[1.03] hover:-translate-y-0.5 shrink-0 select-none cursor-pointer ${
        isThreeCardRow
          ? 'w-[104px] xs:w-[114px] sm:w-[172px] lg:w-[184px] pl-1 pr-1.5 sm:pr-3.5 gap-x-1 sm:gap-x-2.5'
          : 'w-[140px] xs:w-[152px] sm:w-[172px] lg:w-[184px] pl-1 pr-2 sm:pr-3.5 gap-x-1.5 sm:gap-x-3'
      } shadow-[0_2px_8px_rgba(20,25,18,0.06)] hover:shadow-[0_8px_24px_rgba(20,25,18,0.12)] ${
        isSelected
          ? 'border-[#003D2B] ring-2 ring-[#003D2B]/20 bg-[#EAEFE5]/50 scale-[1.02]'
          : 'border-[#DFD1C5] hover:border-[#003D2B]/50'
      }`}
    >
      <figure className={`relative z-10 w-7 h-7 xs:w-8 xs:h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 aspect-square rounded-full shrink-0 shadow-xs bg-gradient-to-br ${voice.avatarBg} flex items-center justify-center`}>
        <span className="text-white text-[10px] xs:text-xs sm:text-sm md:text-base font-bold leading-none">
          {voice.name.charAt(0)}
        </span>
        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-white border border-[#D5E1CE] flex items-center justify-center shadow-xs">
          {isPlaying ? (
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#003D2B] animate-ping" />
          ) : (
            <svg viewBox="0 0 24 24" className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-[#003D2B] fill-current translate-x-px">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </span>
      </figure>

      <div className="flex flex-col min-w-0 flex-1">
        <h4 className="text-[10px] xs:text-[11px] sm:text-[13px] font-bold text-[#141912] leading-tight truncate">
          {voice.name}
        </h4>
        <span className="text-[8px] xs:text-[9px] sm:text-[11px] text-[#616E7C] font-medium leading-tight truncate mt-0.5">
          {voice.role}
        </span>
      </div>
    </div>
  );
};

export const VoiceStylesDirectory: React.FC<{
  className?: string;
}> = ({ className = '' }) => {
  const [activeVoice, setActiveVoice] = useState<VoiceStyle>(VOICE_STYLES[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [customPrompt, setCustomPrompt] = useState<string>(VOICE_STYLES[0].sampleText);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Parallax / Scroll Entrance
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);
  const row4Ref = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [row1Anim, setRow1Anim] = useState({ x: -40, blur: 6, opacity: 0.5 });
  const [row2Anim, setRow2Anim] = useState({ x: 40, blur: 6, opacity: 0.5 });
  const [row3Anim, setRow3Anim] = useState({ x: -40, blur: 6, opacity: 0.5 });
  const [row4Anim, setRow4Anim] = useState({ x: 40, blur: 6, opacity: 0.5 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let rafId = 0;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const windowHeight = window.innerHeight;
        const rect = el.getBoundingClientRect();
        setIsVisible(rect.top < windowHeight * 0.86 && rect.bottom > 0);

        const isMobile = window.innerWidth < 640;
        const calcRow = (rowEl: HTMLDivElement | null, dir: 'left' | 'right', settleAt: number) => {
          const baseOffset = isMobile ? (dir === 'left' ? -20 : 20) : (dir === 'left' ? -72 : 72);
          const hidden = { x: baseOffset, blur: isMobile ? 3 : 8, opacity: 0.45 };
          if (!rowEl) return hidden;
          const top = rowEl.getBoundingClientRect().top;
          const enterStart = windowHeight * 0.98;
          const enterFull = windowHeight * settleAt;
          const progress = Math.max(0, Math.min(1, (enterStart - top) / (enterStart - enterFull)));
          const eased = 1 - (1 - progress) * (1 - progress);
          return {
            x: Number((baseOffset * (1 - eased)).toFixed(1)),
            blur: Number(((1 - eased) * (isMobile ? 3 : 8)).toFixed(1)),
            opacity: Number((0.45 + eased * 0.55).toFixed(2)),
          };
        };

        setRow1Anim(calcRow(row1Ref.current, 'left', 0.74));
        setRow2Anim(calcRow(row2Ref.current, 'right', 0.68));
        setRow3Anim(calcRow(row3Ref.current, 'left', 0.62));
        setRow4Anim(calcRow(row4Ref.current, 'right', 0.56));
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Audio lifecycle
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = activeVoice.audioSrc;

    const handleEnded = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => setIsPlaying(false);

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const playVoiceAudio = async (voice: VoiceStyle) => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      const isSameSrc = audio.src.endsWith(voice.audioSrc);
      if (!isSameSrc) {
        audio.pause();
        audio.src = voice.audioSrc;
      }
      setActiveVoice(voice);
      setCustomPrompt(voice.sampleText);
      await audio.play();
      setIsPlaying(true);
    } catch (err: unknown) {
      const error = err as Error;
      if (error.name !== 'AbortError') {
        console.warn('Voice audio playback error:', error.message);
      }
      setIsPlaying(!audio.paused);
    }
  };

  const toggleVoiceAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        const isSameSrc = audio.src.endsWith(activeVoice.audioSrc);
        if (!isSameSrc || !audio.src) {
          audio.src = activeVoice.audioSrc;
        }
        await audio.play();
        setIsPlaying(true);
      } catch (err: unknown) {
        const error = err as Error;
        console.warn('Voice play restricted:', error.message);
        setIsPlaying(false);
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-20 sm:py-28 relative select-none overflow-hidden bg-[#F4F7EE] ${className}`}
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Hidden audio element */}
      <audio ref={audioRef} preload="auto" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-12">
          
          {/* ————— LEFT CONTENT COLUMN (MATCHING USER REFERENCE DESIGN) ————— */}
          <div 
            className={`w-full xl:max-w-[390px] text-center xl:text-left transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-8 blur-sm'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-[800] tracking-[-0.035em] text-[#141912] leading-[1.04]">
              Choose from <br />
              the <br />
              <span 
                className="text-[#8B7355] italic font-normal"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                voice
              </span> styles
            </h2>
            <p className="mt-4 sm:mt-5 text-[#4E5B49] text-sm sm:text-base leading-relaxed max-w-sm mx-auto xl:mx-0">
              Select from a diverse range of AI voice styles —<br className="hidden sm:inline" />
              from warm narrators to energetic presenters.
            </p>
          </div>

          {/* ————— 4-ROW ZIGZAG PILL CLUSTER (ZERO HORIZONTAL SCROLLING, RESPONSIVE 3-2-3-2) ————— */}
          <div className="w-full max-w-[790px] flex flex-col gap-y-2.5 sm:gap-y-3.5 py-3 px-1 sm:px-2 overflow-hidden mx-auto xl:mx-0">
            {/* ROW 1: Aarohi, Aarav, Maya (3 pills, shifted left) */}
            <div 
              ref={row1Ref}
              style={{
                transform: `translateX(${row1Anim.x}px)`,
                opacity: row1Anim.opacity,
                filter: `blur(${row1Anim.blur}px)`,
                transition: 'transform 0.12s ease-out, opacity 0.12s ease-out, filter 0.12s ease-out'
              }}
              className="flex flex-row items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 flex-nowrap shrink-0 -translate-x-1 sm:-translate-x-4 md:translate-x-0"
            >
              {VOICE_STYLES.slice(0, 3).map(voice => (
                <VoicePillCard
                  key={voice.id}
                  voice={voice}
                  isSelected={activeVoice.id === voice.id}
                  isPlaying={isPlaying && activeVoice.id === voice.id}
                  isThreeCardRow={true}
                  onClick={() => {
                    if (activeVoice.id === voice.id) {
                      toggleVoiceAudio();
                    } else {
                      playVoiceAudio(voice);
                    }
                  }}
                />
              ))}
            </div>

            {/* ROW 2: Ishaan, Zoya (2 pills, shifted right) */}
            <div 
              ref={row2Ref}
              style={{
                transform: `translateX(${row2Anim.x}px)`,
                opacity: row2Anim.opacity,
                filter: `blur(${row2Anim.blur}px)`,
                transition: 'transform 0.12s ease-out, opacity 0.12s ease-out, filter 0.12s ease-out'
              }}
              className="flex flex-row items-center justify-center gap-2 sm:gap-3 flex-nowrap shrink-0 translate-x-1 sm:translate-x-4 md:translate-x-0"
            >
              {VOICE_STYLES.slice(3, 5).map(voice => (
                <VoicePillCard
                  key={voice.id}
                  voice={voice}
                  isSelected={activeVoice.id === voice.id}
                  isPlaying={isPlaying && activeVoice.id === voice.id}
                  isThreeCardRow={false}
                  onClick={() => {
                    if (activeVoice.id === voice.id) {
                      toggleVoiceAudio();
                    } else {
                      playVoiceAudio(voice);
                    }
                  }}
                />
              ))}
            </div>

            {/* ROW 3: Dhruv, Naveen, Charu (3 pills, shifted left) */}
            <div 
              ref={row3Ref}
              style={{
                transform: `translateX(${row3Anim.x}px)`,
                opacity: row3Anim.opacity,
                filter: `blur(${row3Anim.blur}px)`,
                transition: 'transform 0.12s ease-out, opacity 0.12s ease-out, filter 0.12s ease-out'
              }}
              className="flex flex-row items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 flex-nowrap shrink-0 -translate-x-1 sm:-translate-x-4 md:translate-x-0"
            >
              {VOICE_STYLES.slice(5, 8).map(voice => (
                <VoicePillCard
                  key={voice.id}
                  voice={voice}
                  isSelected={activeVoice.id === voice.id}
                  isPlaying={isPlaying && activeVoice.id === voice.id}
                  isThreeCardRow={true}
                  onClick={() => {
                    if (activeVoice.id === voice.id) {
                      toggleVoiceAudio();
                    } else {
                      playVoiceAudio(voice);
                    }
                  }}
                />
              ))}
            </div>

            {/* ROW 4: Lavanya, Omkar (2 pills, shifted right) */}
            <div 
              ref={row4Ref}
              style={{
                transform: `translateX(${row4Anim.x}px)`,
                opacity: row4Anim.opacity,
                filter: `blur(${row4Anim.blur}px)`,
                transition: 'transform 0.12s ease-out, opacity 0.12s ease-out, filter 0.12s ease-out'
              }}
              className="flex flex-row items-center justify-center gap-2 sm:gap-3 flex-nowrap shrink-0 translate-x-1 sm:translate-x-4 md:translate-x-0"
            >
              {VOICE_STYLES.slice(8, 10).map(voice => (
                <VoicePillCard
                  key={voice.id}
                  voice={voice}
                  isSelected={activeVoice.id === voice.id}
                  isPlaying={isPlaying && activeVoice.id === voice.id}
                  isThreeCardRow={false}
                  onClick={() => {
                    if (activeVoice.id === voice.id) {
                      toggleVoiceAudio();
                    } else {
                      playVoiceAudio(voice);
                    }
                  }}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Selected Voice Interactive Sandbox Preview (Matching Reference Image) */}
        <div className="mt-12 p-6 sm:p-8 rounded-[28px] bg-white border border-[#D5E1CE] shadow-[0_12px_32px_rgba(20,25,18,0.06)]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl border border-[#D5E1CE] shadow-sm shrink-0 bg-gradient-to-br ${activeVoice.avatarBg} flex items-center justify-center`}>
                <span className="text-white text-lg font-bold leading-none">{activeVoice.name.charAt(0)}</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xl font-bold text-[#141912]">{activeVoice.name}</h4>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E3EDE0] text-[#003D2B] font-bold border border-[#D3E2CF]">
                    {activeVoice.role}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#F4F7EE] text-[#4E5B49] font-medium border border-[#CCD8C3]">
                    {activeVoice.language}
                  </span>
                </div>
                <p className="text-xs text-[#616E7C] mt-1">{activeVoice.tone} &bull; Ideal for {activeVoice.category}</p>
              </div>
            </div>

            {/* Text Input Sandbox */}
            <div className="w-full lg:max-w-xl min-w-0">
              <div className="relative">
                <input
                  type="text"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="Type words for the AI agent to speak..."
                  className="w-full min-w-0 bg-[#F4F7EE] border border-[#CCD8C3] rounded-full pl-5 pr-36 py-3 text-xs sm:text-sm text-[#141912] placeholder-[#4E5B49]/60 focus:outline-none focus:border-[#003D2B] focus:ring-1 focus:ring-[#003D2B]"
                />
                <button 
                  onClick={toggleVoiceAudio}
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-full bg-[#003D2B] text-white text-xs font-bold hover:bg-[#022D20] transition-colors flex items-center gap-1.5 shadow-sm active:scale-95"
                >
                  <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-[10px]`} />
                  <span>{isPlaying ? 'Pause' : 'Listen Voice'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Regional Indian & Global Languages Badge Strip */}
          <div className="mt-6 pt-5 border-t border-[#D5E1CE] flex flex-wrap items-center justify-between gap-3 text-xs text-[#4E5B49]">
            <span className="text-[#141912] font-semibold flex items-center gap-1.5">
              <i className="fas fa-language text-[#003D2B]" /> Supported Dialects &amp; Indian Languages:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {[
                'ಕನ್ನಡ (Kannada)',
                'हिन्दी (Hindi)',
                'मराठी (Marathi)',
                'Indian English',
                'தமிழ் (Tamil)',
                'తెలుగు (Telugu)',
                'বাংলা (Bengali)',
                '30+ Regional Accents'
              ].map(lang => (
                <span key={lang} className="px-2.5 py-1 rounded-md bg-[#EAEFE5] border border-[#D5E1CE] text-[#2D452C] text-[11px] font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default VoiceStylesDirectory;
