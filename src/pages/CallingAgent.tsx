import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { trackVoiceSamplePlay, trackCTA } from '../utils/analytics';

// Pre-defined voice styles with Indian & Global names and native audio mappings
interface VoiceStyle {
  id: string;
  name: string;
  role: string;
  tone: string;
  category: 'E-learning' | 'Customer Support' | 'Video Narration' | 'Podcasting' | 'Calling Agent';
  gender: 'Female' | 'Male';
  language: string;
  flag: string;
  country: string;
  avatarBg: string;
  avatarImg: string;
  sampleText: string;
  audioSrc: string;
}

const VOICE_STYLES: VoiceStyle[] = [
  // ROW 1: Divya (KN), Shreeraj (HI), Skylar (US) — 3 cards
  {
    id: 'divya',
    name: 'Divya',
    role: 'Customer Support',
    tone: 'Conversational, empathetic, soothing',
    category: 'Customer Support',
    gender: 'Female',
    language: 'Kannada',
    flag: '🇮🇳',
    country: 'India',
    avatarBg: 'from-[#003D2B] to-[#526B3D]',
    avatarImg: '/images/avatars/ns-avatar-16.png',
    sampleText: 'ನಮಸ್ಕಾರ! ANVRiksh ತಂತ್ರಜ್ಞಾನ ಸೇವೆಗಳಿಗೆ ಸುಸ್ವಾಗತ. ನಿಮ್ಮ ಯೋಜನೆಗೆ ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?',
    audioSrc: '/audio/Anvriksh_KN.aac',
  },
  {
    id: 'shreeraj',
    name: 'Shreeraj',
    role: 'Enterprise Calling',
    tone: 'Professional, assertive, polished',
    category: 'Calling Agent',
    gender: 'Male',
    language: 'Hindi',
    flag: '🇮🇳',
    country: 'India',
    avatarBg: 'from-[#141912] to-[#2D452C]',
    avatarImg: '/images/avatars/ns-avatar-29.png',
    sampleText: 'ANVRiksh एंटरप्राइज सपोर्ट में आपका स्वागत है। हमारे AI एजेंट्स 24 घंटे आपकी सेवा में उपलब्ध हैं।',
    audioSrc: '/audio/Anvrikdh_HI.aac',
  },
  {
    id: 'skylar',
    name: 'Skylar',
    role: 'Global Voice Agent',
    tone: 'Natural, fluent, broadcast-ready',
    category: 'Calling Agent',
    gender: 'Female',
    language: 'English (US)',
    flag: '🇺🇸',
    country: 'United States',
    avatarBg: 'from-[#1D3557] to-[#457B9D]',
    avatarImg: '/images/avatars/ns-avatar-17.png',
    sampleText: 'Hello! I am Skylar from ANVRiksh. I can automate your outbound outreach and handle customer calls in real-time.',
    audioSrc: '/audio/cartesia_2026-11-17T13_43_32Z_Skylar_sonic-3.6_en-US.wav',
  },

  // ROW 2: Sindhu (MH), Niyati (GU) — 2 cards
  {
    id: 'sindhu',
    name: 'Sindhu',
    role: 'Business Solutions',
    tone: 'Warm, consultative, polished',
    category: 'Customer Support',
    gender: 'Female',
    language: 'Marathi',
    flag: '🇮🇳',
    country: 'India',
    avatarBg: 'from-[#8B7355] to-[#526B3D]',
    avatarImg: '/images/avatars/ns-avatar-31.png',
    sampleText: 'नमस्कार! ANVRiksh च्या व्यवसाय सोल्यूशन्स टीमकडून आम्ही आपले स्वागत करतो.',
    audioSrc: '/audio/Anvriksh_Mh.aac',
  },
  {
    id: 'niyati',
    name: 'Niyati',
    role: 'Conversational Support',
    tone: 'Bright, friendly, articulate',
    category: 'Calling Agent',
    gender: 'Female',
    language: 'Gujarati',
    flag: '🇮🇳',
    country: 'India',
    avatarBg: 'from-[#526B3D] to-[#8B7355]',
    avatarImg: '/images/avatars/ns-avatar-28.png',
    sampleText: 'નમસ્તે! ANVRiksh બિઝનેસ પ્લેટફોર્મ પર આપનું સ્વાગત છે. હું તમારા પ્રોજેક્ટ માટે શું સહಾಯ કરી શકું?',
    audioSrc: '/audio/cartesia_2026-11-17T13_45_01Z_Niyati_sonic-3.6_gu-IN.wav',
  },

  // ROW 3: Aarav (HI), Aarav (KN), Ishaan (EN) — 3 cards
  {
    id: 'aarav_hi',
    name: 'Aarav',
    role: 'Educational Training',
    tone: 'Dynamic, persuasive, clear',
    category: 'E-learning',
    gender: 'Male',
    language: 'Hindi',
    flag: '🇮🇳',
    country: 'India',
    avatarBg: 'from-[#2D452C] to-[#003D2B]',
    avatarImg: '/images/avatars/ns-avatar-15.png',
    sampleText: 'नमस्ते! क्या आप अपने बिज़नेस के लिए ऑटोनॉमस AI कॉलिंग एजेंट शुरू करने के लिए तैयार हैं?',
    audioSrc: '/audio/bca_internship_hi.wav',
  },
  {
    id: 'aarav_kn',
    name: 'Aarav (KN)',
    role: 'Academic Counselor',
    tone: 'Consultative, patient, clear',
    category: 'Customer Support',
    gender: 'Male',
    language: 'Kannada',
    flag: '🇮🇳',
    country: 'India',
    avatarBg: 'from-[#698F70] to-[#003D2B]',
    avatarImg: '/images/avatars/ns-avatar-32.png',
    sampleText: 'ನಾನು ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ. ಸೆಟಪ್ ಹಂತಗಳನ್ನು ವಿವರಿಸುತ್ತೇನೆ.',
    audioSrc: '/audio/bca_internship_kn.wav',
  },
  {
    id: 'ishaan',
    name: 'Ishaan',
    role: 'Deep Tech Insights',
    tone: 'Authoritative, technical, sharp',
    category: 'Podcasting',
    gender: 'Male',
    language: 'Indian English',
    flag: '🇮🇳',
    country: 'India',
    avatarBg: 'from-[#003D2B] to-[#698F70]',
    avatarImg: '/images/avatars/ns-avatar-34.png',
    sampleText: 'Welcome to Deep Tech Insights. Today we evaluate autonomous neural routing and sub-second latency.',
    audioSrc: '/audio/deep_courses_en.wav',
  },
];

// DTMF Options mapping keys 1 to 9 to dedicated regional Indian calling agent recordings
export interface DTMFOption {
  key: string;
  title: string;
  scenario: string;
  language: string;
  nativeLang: string;
  agentName: string;
  agentRole: string;
  audioSrc: string;
  duration: string;
  description: string;
}

export const DTMF_OPTIONS: DTMFOption[] = [
  {
    key: '1',
    title: 'BCA Internship (English)',
    scenario: 'Admissions & Internship Counseling',
    language: 'English',
    nativeLang: 'English',
    agentName: 'Aditya',
    agentRole: 'Student Admissions Counselor',
    audioSrc: '/audio/bca_internship_en.wav',
    duration: '0:18',
    description: 'Autonomous qualification call for prospective BCA candidates explaining internship tracks, industry mentorship, and eligibility.'
  },
  {
    key: '2',
    title: 'BCA Internship (हिन्दी - Hindi)',
    scenario: 'प्रवेश और इंटर्नशिप परामर्श',
    language: 'Hindi',
    nativeLang: 'हिन्दी',
    agentName: 'Aarav',
    agentRole: 'वरिष्ठ परामर्शदाता (Senior Counselor)',
    audioSrc: '/audio/bca_internship_hi.wav',
    duration: '0:27',
    description: 'हिंदी में बीसीए इंटर्नशिप विवरण, उद्योग-उन्मुख व्यावहारिक परियोजनाएं और प्लेसमेंट सहायता की पूरी जानकारी।'
  },
  {
    key: '3',
    title: 'BCA Internship (ಕನ್ನಡ - Kannada)',
    scenario: 'ಪ್ರವೇಶ ಮತ್ತು ಇಂಟರ್ನ್‌ಶಿಪ್ ಸಮಾಲೋಚನೆ',
    language: 'Kannada',
    nativeLang: 'ಕನ್ನಡ',
    agentName: 'Naveen',
    agentRole: 'ವಿದ್ಯಾರ್ಥಿ ಸಮಾಲೋಚಕ (Student Counselor)',
    audioSrc: '/audio/bca_internship_kn.wav',
    duration: '0:31',
    description: 'ಕನ್ನಡದಲ್ಲಿ ಬಿಸಿಎ ಇಂಟರ್ನ್‌ಶಿಪ್ ವಿವರಗಳು, ತಾಂತ್ರಿಕ ಕೌಶಲ್ಯ ತರಬೇತಿ ಮತ್ತು ನೇರ ಉದ್ಯೋಗಾವಕಾಶಗಳ ಮಾಹಿತಿ।'
  },
  {
    key: '4',
    title: 'Deep Tech & Advanced Courses',
    scenario: 'Curriculum & Skill Specializations',
    language: 'English',
    nativeLang: 'English',
    agentName: 'Ishaan',
    agentRole: 'AI Curriculum Specialist',
    audioSrc: '/audio/deep_courses_en.wav',
    duration: '0:25',
    description: 'Comprehensive consultation for AI, Data Engineering, Cloud Infrastructure, and full-stack software development courses.'
  },
  {
    key: '5',
    title: 'Deep Tech Courses (ಕನ್ನಡ - Kannada)',
    scenario: 'ಸುಧಾರಿತ ತಂತ್ರಜ್ಞಾನ ಕೋರ್ಸ್‌ಗಳು',
    language: 'Kannada',
    nativeLang: 'ಕನ್ನಡ',
    agentName: 'Omkar',
    agentRole: 'ತಾಂತ್ರಿಕ ತಜ್ಞ (Technical Expert)',
    audioSrc: '/audio/deep_courses_kn.wav',
    duration: '0:38',
    description: 'ಆರ್ಟಿಫಿಶಿಯಲ್ ಇಂಟೆಲಿಜೆನ್ಸ್, ಕ್ಲೌಡ್ ಕಂಪ್ಯೂಟಿಂಗ್ ಮತ್ತು ಸಾಫ್ಟ್‌ವೇರ್ ತಂತ್ರಜ್ಞಾನದ ಸುಧಾರಿತ ಕೋರ್ಸ್‌ಗಳ ಸಮಗ್ರ ಮಾಹಿತಿ।'
  },
  {
    key: '6',
    title: 'Distance Education (ಕನ್ನಡ - Kannada)',
    scenario: 'ದೂರಶಿಕ್ಷಣ & ಮುಕ್ತ ಕಲಿಕೆ ಮಾರ್ಗದರ್ಶನ',
    language: 'Kannada',
    nativeLang: 'ಕನ್ನಡ',
    agentName: 'Lavanya',
    agentRole: 'ಶೈಕ್ಷಣಿಕ ಸಲಹೆಗಾರ್ತಿ (Academic Guide)',
    audioSrc: '/audio/distance_education_kn.wav',
    duration: '0:35',
    description: 'ಮಾನ್ಯತೆ ಪಡೆದ ಯುಜಿಸಿ ವಿಶ್ವವಿದ್ಯಾಲಯಗಳಿಂದ ದೂರಶಿಕ್ಷಣ ಪದವಿ ಮತ್ತು ಸ್ನಾತಕೋತ್ತರ ಕೋರ್ಸ್‌ಗಳ ವಿವರವಾದ ಮಾರ್ಗದರ್ಶನ।'
  },
  {
    key: '7',
    title: 'Enterprise Support (हिन्दी - Hindi)',
    scenario: 'ग्राहक सहायता और व्यावसायिक समाधान',
    language: 'Hindi',
    nativeLang: 'हिन्दी',
    agentName: 'Zoya',
    agentRole: 'एंटरप्राइज एजेंट (Enterprise Agent)',
    audioSrc: '/audio/anvriksh_hi.wav',
    duration: '0:21',
    description: 'व्यावसायिक पूछताछ, AI वॉयस ऑटोमेशन और सपोर्ट समाधानों के लिए तात्कालिक हिंदी कॉलिंग एजेंट।'
  },
  {
    key: '8',
    title: 'Enterprise Support (ಕನ್ನಡ - Kannada)',
    scenario: 'ಗ್ರಾಹಕ ಬೆಂಬಲ ಮತ್ತು ಉದ್ಯಮ ಪರಿಹಾರಗಳು',
    language: 'Kannada',
    nativeLang: 'ಕನ್ನಡ',
    agentName: 'Aarohi',
    agentRole: 'ಗ್ರಾಹಕ ಬೆಂಬಲ ಅಧಿಕಾರಿ (Customer Support)',
    audioSrc: '/audio/anvriksh_kn.wav',
    duration: '0:23',
    description: 'ಕನ್ನಡದಲ್ಲಿ ANVRiksh ತಂತ್ರಜ್ಞಾನ ಸೇವೆಗಳು, ಸಾಫ್ಟ್‌ವೇರ್ ಪರಿಹಾರಗಳು ಮತ್ತು ಗ್ರಾಹಕ ಸಹಾಯವಾಣಿ।'
  },
  {
    key: '9',
    title: 'Enterprise Support (मराठी - Marathi)',
    scenario: 'ग्राहक सहाय्य आणि व्यवसाय उपाय',
    language: 'Marathi',
    nativeLang: 'मराठी',
    agentName: 'Dhruv',
    agentRole: 'व्यवसाय सल्लागार (Business Consultant)',
    audioSrc: '/audio/anvriksh_mh.wav',
    duration: '0:24',
    description: 'मराठीत ANVRiksh च्या AI व्हॉइस कॉलिंग एजंट, एंटरप्राइज सोल्यूशन्स आणि सपोर्टची माहिती।'
  },
];

const BRANDS = [
  { name: 'Asana', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
  { name: 'Spotify', icon: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.496 17.306c-.215.352-.676.463-1.028.248-2.812-1.718-6.353-2.107-10.524-1.155-.401.092-.803-.16-.895-.561-.092-.401.16-.803.561-.895 4.571-1.045 8.492-.599 11.638 1.335.352.215.463.676.248 1.028zm1.467-3.26c-.27.441-.853.58-1.294.31-3.219-1.979-8.127-2.55-11.935-1.394-.498.151-1.025-.133-1.176-.631-.151-.498.133-1.025.631-1.176 4.354-1.321 9.774-.684 13.464 1.597.441.27.58.853.31 1.294zm.126-3.41c-3.86-2.292-10.228-2.503-13.914-1.385-.591.179-1.218-.157-1.397-.748-.179-.591.157-1.218.748-1.397 4.238-1.286 11.278-1.042 15.719 1.595.532.316.707 1.004.391 1.536-.316.532-1.004.707-1.536.391z' },
  { name: 'Notion', icon: 'M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.105 2.48c-.466.047-.56.327-.374.514zm.793 4.807v12.834c0 .84.42 1.12 1.214 1.073l14.195-.84c.84-.046.933-.56.933-1.167V8.033c0-.606-.233-.933-.793-.886l-14.755.886c-.653.047-.794.373-.794.982z' },
  { name: 'Stripe', icon: 'M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.5 12.385.5 6.667.5 2.5 3.743 2.5 8.924c0 6.643 9.157 5.467 9.157 8.274 0 .993-.863 1.488-2.274 1.488-2.493 0-5.467-1.196-7.387-2.348l-.92 5.564c1.889.923 4.966 1.598 8.441 1.598 6.015 0 10.483-3.08 10.483-8.406 0-7.23-6.024-5.644-6.024-5.944z' },
  { name: 'Discord', icon: 'M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z' },
  { name: 'Dropbox', icon: 'M7.058 0L0 4.622l4.947 3.993L12 4.622zm9.884 0L12 4.622l7.053 3.993 4.947-3.993zM0 12.607l7.058 4.621L12 13.235l-7.053-3.993zm16.942-3.365L12 13.235l4.942 3.993 7.058-4.621zM7.058 19.05L12 15.823l4.942 3.227L12 24z' },
  { name: 'Hotjar', icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1-3 0V11a1.5 1.5 0 0 1 3 0zm0-8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' },
  { name: 'Outreach', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
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
      className={`flex items-center justify-start rounded-full border bg-white py-1.5 sm:py-2 transition-all duration-300 group hover:scale-[1.03] hover:-translate-y-0.5 shrink-0 select-none cursor-pointer ${
        isThreeCardRow
          ? 'w-[104px] xs:w-[114px] sm:w-[176px] lg:w-[190px] pl-1.5 pr-2 sm:pr-3.5 gap-x-1 sm:gap-x-2.5'
          : 'w-[140px] xs:w-[152px] sm:w-[176px] lg:w-[190px] pl-1.5 pr-2.5 sm:pr-3.5 gap-x-1.5 sm:gap-x-3'
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

      {/* Voice Name, Flag & Gender/Trait */}
      <div className="flex flex-col min-w-0 flex-1 text-left">
        <div className="flex items-center gap-1 leading-none mb-0.5">
          <span className="text-[10px] sm:text-xs leading-none" role="img" aria-label={voice.country}>
            {voice.flag}
          </span>
          <span className="text-[7.5px] xs:text-[8px] sm:text-[9.5px] font-semibold text-[#003D2B] uppercase tracking-wider truncate">
            {voice.language.includes('English') ? 'ENGLISH' : voice.language.toUpperCase()}
          </span>
        </div>
        <h4 className="text-[9.5px] xs:text-[10.5px] sm:text-[12.5px] font-bold text-[#141912] leading-tight truncate">
          {voice.name}
        </h4>
        <span className="text-[7.5px] xs:text-[8px] sm:text-[10px] text-[#616E7C] font-medium leading-tight truncate mt-0.5">
          {voice.gender} &bull; {voice.role}
        </span>
      </div>
    </div>
  );
};

const WAVEFORM_BARS = Array.from({ length: 125 }, (_, i) => {
  const pos = i / 125;
  const base = 12 + Math.sin(pos * Math.PI * 3) * 24 + Math.sin(pos * Math.PI * 7) * 10;
  return Math.max(6, Math.min(54, base));
});

const CallingAgent: React.FC = () => {
  const waveformBarRefs = useRef<Array<SVGRectElement | null>>([]);

  // Audio player state & DTMF routing
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentAudioSrc, setCurrentAudioSrc] = useState<string>(DTMF_OPTIONS[0].audioSrc);
  const [activeDtmfKey, setActiveDtmfKey] = useState<string>('1');
  const [playbackTime, setPlaybackTime] = useState<number>(0);
  const [audioDuration, setAudioDuration] = useState<number>(18);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Active voice selection (defaults to Divya)
  const [activeVoice, setActiveVoice] = useState<VoiceStyle>(VOICE_STYLES[0]);
  const [customPrompt, setCustomPrompt] = useState<string>(VOICE_STYLES[0].sampleText);

  // Step tabs
  const [activeStep, setActiveStep] = useState<number>(1);

  // Voice style scroll animation & parallax state
  const voiceStyleSectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  const [isVoiceStyleVisible, setIsVoiceStyleVisible] = useState<boolean>(false);
  const [row1Anim, setRow1Anim] = useState({ x: -40, blur: 6, opacity: 0.5 });
  const [row2Anim, setRow2Anim] = useState({ x: 40, blur: 6, opacity: 0.5 });
  const [row3Anim, setRow3Anim] = useState({ x: -40, blur: 6, opacity: 0.5 });

  // Each row slides in from the side and is blurred only while it is arriving.
  // The entrance finishes once the row sits in the upper part of the screen.
  useEffect(() => {
    const el = voiceStyleSectionRef.current;
    if (!el) return;

    let rafId = 0;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const windowHeight = window.innerHeight;
        const sectionRect = el.getBoundingClientRect();
        setIsVoiceStyleVisible(sectionRect.top < windowHeight * 0.86 && sectionRect.bottom > 0);

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

  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  // Draw the hero bars on the SVG nodes so the page does not re-render every frame
  useEffect(() => {
    let animationFrameId = 0;
    const start = performance.now();

    const animate = (time: number) => {
      const elapsed = (time - start) / 1000;
      const intensity = isPlayingRef.current ? 1.55 : 0.95;
      const bars = waveformBarRefs.current;

      for (let i = 0; i < bars.length; i++) {
        const bar = bars[i];
        if (!bar) continue;
        const pos = i / 125;
        const wave1 = Math.sin(elapsed * 2.8 + pos * Math.PI * 6);
        const wave2 = Math.cos(elapsed * 1.9 + pos * Math.PI * 4);
        const wave3 = Math.sin(elapsed * 4.2 + i * 0.45) * 0.4;
        const raw = 14 + (wave1 * 14 + wave2 * 12 + wave3 * 6) * intensity;
        bar.setAttribute('width', String(Math.max(6, Math.min(56, raw))));
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Audio playback handler & event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Preload initial audio source
    audio.src = currentAudioSrc;

    const handleTimeUpdate = () => {
      setPlaybackTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        setAudioDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setPlaybackTime(0);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
      console.warn('Audio playback error on element source:', audio.src);
      setIsPlaying(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const playAudioFile = async (src: string) => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      const normalizedCurrent = audio.currentSrc || audio.src;
      const isSameSrc = normalizedCurrent.endsWith(src);

      if (!isSameSrc) {
        audio.pause();
        audio.src = src;
        audio.load();
      }

      setCurrentAudioSrc(src);
      audio.playbackRate = playbackRate;
      await audio.play();
      setIsPlaying(true);
    } catch (err: unknown) {
      const error = err as Error;
      if (error.name !== 'AbortError') {
        console.warn('Audio play restricted or interrupted:', error.message);
      }
      setIsPlaying(!audio.paused);
    }
  };

  // Authentic Web Audio API DTMF Dual-Tone Generator for realistic telephone keypad sounds
  const playDtmfTone = (key: string) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const dtmfFreqs: Record<string, [number, number]> = {
        '1': [697, 1209],
        '2': [697, 1336],
        '3': [697, 1477],
        '4': [770, 1209],
        '5': [770, 1336],
        '6': [770, 1477],
        '7': [852, 1209],
        '8': [852, 1336],
        '9': [852, 1477],
        '*': [941, 1209],
        '0': [941, 1336],
        '#': [941, 1477],
      };

      const freqs = dtmfFreqs[key];
      if (!freqs) return;

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc1.frequency.value = freqs[0];
      osc2.frequency.value = freqs[1];

      gainNode.gain.setValueAtTime(0.12, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.15);
      osc2.stop(ctx.currentTime + 0.15);
      setTimeout(() => {
        try { ctx.close(); } catch { /* ignore */ }
      }, 200);
    } catch {
      // AudioContext not permitted or muted
    }
  };

  const handleSelectDtmf = (key: string) => {
    playDtmfTone(key);
    setActiveDtmfKey(key);
    const opt = DTMF_OPTIONS.find(o => o.key === key);
    if (opt) {
      playAudioFile(opt.audioSrc);
    }
  };

  const handleSelectVoice = (voice: VoiceStyle) => {
    setActiveVoice(voice);
    setCustomPrompt(voice.sampleText);
    playAudioFile(voice.audioSrc);
    trackVoiceSamplePlay(voice.name, {
      language: voice.language,
      category: voice.category,
      page: 'calling_agent_page',
    });
  };

  // Keyboard shortcut listener: dial 1-9 directly on keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
        handleSelectDtmf(e.key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const togglePlayAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        const normalizedCurrent = audio.currentSrc || audio.src;
        if (!normalizedCurrent || normalizedCurrent === '' || normalizedCurrent === window.location.href) {
          audio.src = currentAudioSrc;
          audio.load();
        }
        audio.playbackRate = playbackRate;
        await audio.play();
        setIsPlaying(true);
      } catch (err: unknown) {
        const error = err as Error;
        console.warn('Audio play restricted by browser policy:', error.message);
        setIsPlaying(false);
      }
    }
  };

  const handleRateChange = (rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setPlaybackTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const activeDtmfOption = DTMF_OPTIONS.find(o => o.key === activeDtmfKey) || DTMF_OPTIONS[0];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'AI Voice Generator & Autonomous Calling Agent',
    name: 'ANVRiksh Autonomous Voice AI Platform',
    provider: {
      '@type': 'Organization',
      name: 'ANVRiksh Tech Solutions LLP',
      identifier: 'ADA-3944',
      url: 'https://anvriksh.com',
    },
    areaServed: 'Worldwide',
    description:
      'Human-like autonomous AI calling agents and neural voice synthesis supporting 100+ languages including Kannada, Hindi, Marathi, and English. Sub-second latency, live DTMF navigation, and enterprise telephony integration.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Voice AI & Autonomous Calling Services',
      itemListElement: [
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Autonomous Inbound & Outbound Calling Agents' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Multilingual Neural Speech Synthesis (100+ Languages)' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Interactive DTMF Telephony & Smart Call Routing' } },
        { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'CRM Integration & Automated Follow-Up Sync' } }
      ]
    }
  };

  return (
    <div 
      className="min-h-screen bg-[#F4F7EE] text-[#141912] selection:bg-[#003D2B]/15 selection:text-[#003D2B] overflow-x-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <SEO
        title="AI Voice Generator & Autonomous Calling Agents | ANVRiksh Tech Solutions LLP"
        description="Deploy human-like autonomous AI calling agents and broadcast-quality neural voice synthesis. Sub-second latency, multilingual support (Kannada, Hindi, Marathi, English), live DTMF, and CRM sync."
        keywords="AI voice generator, calling agent, autonomous phone bot, voice AI India, conversational voice bot, text to speech, multilingual speech synthesis, ANVRiksh Tech Solutions LLP"
        canonicalUrl="https://anvriksh.com/calling-agent"
        structuredData={structuredData}
        ogImage="/og-image.png"
      />

      {/* Hidden audio element pointing to active voice sample */}
      <audio ref={audioRef} preload="auto" />

      {/* =========================================================================
          1. HERO SECTION WITH HOME ANIMATION & ANVRIKSH PALETTE
          ========================================================================= */}
      <section 
        className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden select-none" 
        role="banner"
        aria-label="AI Voice Generator Hero"
      >
        {/* Atmospheric Theme Background Mesh Gradients & Micro-dots (matching Home.tsx) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#003D2B_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-[0.035]" />
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#003D2B]/10 via-[#526B3D]/6 to-transparent rounded-full blur-[120px]" />
          <div className="absolute top-10 -right-24 w-[550px] h-[550px] bg-gradient-to-bl from-[#E2BC94]/25 via-[#F7E7D2]/15 to-transparent rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#D5E1CE]/30 via-white/50 to-[#E3EDE0]/30 rounded-full blur-[130px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Top Trust Badge */}
          <Reveal variant="fade" duration={600}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] shadow-xs mb-5 transition-transform duration-300 hover:scale-105 cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-bold text-[#003D2B] tracking-tight">
                We're live on productHunt &bull; Voice AI &amp; Autonomous Calling
              </span>
            </div>
          </Reveal>

          {/* Main Headline */}
          <Reveal variant="up" duration={700} delay={80}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-[800] tracking-[-0.035em] text-[#141912] max-w-4xl mx-auto leading-[1.08]">
              Your voice, <span className="text-[#8B7355] font-serif italic font-normal">reinvented</span> by AI.
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal variant="up" duration={700} delay={140}>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#4E5B49] max-w-2xl mx-auto font-normal leading-relaxed">
              Bring your words to life with ultra-realistic AI voices powered by deep learning.
              Perfect for autonomous calling agents, videos, podcasts, ads, and 24/7 customer operations.
            </p>
          </Reveal>

          {/* Action Buttons */}
          <Reveal variant="up" duration={700} delay={180}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            
            {/* Primary Action Button */}
            <Link
              to="/company/contact-us"
              onClick={() => trackCTA('Get in touch - Hero', '/company/contact-us')}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#003D2B] hover:bg-[#022D20] shadow-[0_12px_28px_rgba(0,61,43,0.25)] hover:shadow-[0_16px_36px_rgba(0,61,43,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 w-full sm:w-auto"
            >
              <span>Get in touch</span>
              <span className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                <i className="fas fa-arrow-right text-[11px]" />
              </span>
            </Link>

            {/* Secondary Action Button (Play Live Sample) */}
            <button
              onClick={togglePlayAudio}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-[#141912] bg-white hover:bg-[#EAEFE5] border border-[#CCD8C3] shadow-[0_4px_16px_rgba(20,25,18,0.06)] transition-all duration-200 w-full sm:w-auto active:scale-95"
            >
              {isPlaying ? (
                <>
                  <span className="w-2.5 h-2.5 rounded-sm bg-[#003D2B] animate-spin" />
                  <span className="text-[#003D2B] font-bold">Pause Live Audio</span>
                </>
              ) : (
                <>
                  <i className="fas fa-play text-xs text-[#003D2B]" />
                  <span>Play Voice Sample</span>
                </>
              )}
            </button>
          </div>

          <p className="mt-3 text-xs text-[#616E7C] italic">
            No signup required for demo — try it live in your browser.
          </p>
          </Reveal>

          {/* ————————————————— THE HOME VIDEO & WAVEFORM STUDIO CONSOLE ————————————————— */}
          <Reveal variant="up" duration={800} delay={220} className="mt-10 sm:mt-14 max-w-4xl mx-auto px-1 sm:px-2">
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#0C140E] border-2 border-[#D5E1CE] shadow-[0_24px_60px_rgba(20,25,18,0.18)]">
              
              {/* Loop Video Animation */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-center opacity-85 scale-105"
                  aria-label="Decorative background video animation"
                >
                  <source src="/video/big-circle.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C140E] via-transparent to-[#0C140E]/60" />
                <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0C140E]/30 to-[#0C140E]/80" />
              </div>

              {/* Foreground Floating Controls on the Video */}
              <div className="relative z-10 p-5 sm:p-7 text-white">
                
                {/* Header Strip inside console */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/15 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-[#C6F56F] animate-ping' : 'bg-white/40'}`} />
                    <span className="font-mono uppercase tracking-wider text-[11px] text-white/90">
                      {isPlaying ? 'Synthetic Neural Stream (Active)' : 'Voice Synthesizer Waveform (Standby)'}
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-3 font-mono text-[11px] text-white/50">
                    <span>48kHz LOSSLESS</span>
                    <span>120ms ZERO-LATENCY</span>
                    <span>NEURAL V4</span>
                  </div>
                </div>

                {/* The 125 SVG Voice Bars Visualizer */}
                <div 
                  className="pt-6 pb-3 cursor-pointer transition-opacity hover:opacity-95 flex items-center justify-center overflow-x-hidden"
                  onClick={togglePlayAudio}
                  title="Click to toggle voice simulation"
                >
                  <svg 
                    id="voice-waveform" 
                    viewBox="0 0 869 60" 
                    className="w-full h-14 sm:h-16 max-w-[869px] select-none"
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {WAVEFORM_BARS.map((height, index) => {
                      const x = index * 7;
                      const isHighBar = index % 4 === 0 || index % 5 === 0;
                      return (
                        <rect
                          key={index}
                          ref={(node) => {
                            waveformBarRefs.current[index] = node;
                          }}
                          className="voice-bar"
                          x={x}
                          y={60}
                          width={height}
                          height={1.5}
                          transform={`rotate(-90 ${x} 60)`}
                          fill={isHighBar ? '#C6F56F' : '#FCFCFC'}
                          fillOpacity={isHighBar ? 0.95 : 0.45}
                          rx={0.75}
                        />
                      );
                    })}
                  </svg>
                </div>

                {/* Controller Strip below Waveform */}
                <div className="pt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-white/80">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={togglePlayAudio}
                      className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-semibold transition-all"
                    >
                      {isPlaying ? 'Pause' : 'Play Simulation'}
                    </button>
                    <span className="font-mono text-white/60">
                      {formatTime(playbackTime)} / {formatTime(audioDuration)}
                    </span>
                  </div>

                  {/* Audio scrubber */}
                  <div className="flex-1 max-w-xs mx-2 hidden sm:block">
                    <input
                      type="range"
                      min="0"
                      max={audioDuration || 14}
                      step="0.1"
                      value={playbackTime}
                      onChange={handleSeek}
                      className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C6F56F]"
                      title="Scrub audio playback"
                    />
                  </div>

                  <div className="flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                    <span className="text-white/40 text-[11px] mr-1">Speed:</span>
                    {[1, 1.25, 1.5].map(rate => (
                      <button
                        key={rate}
                        onClick={() => handleRateChange(rate)}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                          playbackRate === rate ? 'bg-[#C6F56F] text-[#070B10] font-bold' : 'text-white/60 hover:text-white'
                        }`}
                      >
                        {rate}x
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </Reveal>

        </div>
      </section>


      {/* =========================================================================
          2. CLIENTS / TRUSTED BRANDS SECTION (Home page ivory strip)
          ========================================================================= */}
      <section className="py-12 sm:py-16 border-y border-[#D5E1CE] bg-[#EAEFE5]/60 relative overflow-hidden select-none">
        <Reveal variant="up" duration={700} className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] text-[#4E5B49] mb-8">
            Trusted by 10,000+ creators and forward-thinking enterprises worldwide
          </p>

          <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex items-center gap-12 sm:gap-16 animate-marquee whitespace-nowrap">
              {[...BRANDS, ...BRANDS].map((brand, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-[#4E5B49] hover:text-[#003D2B] transition-colors duration-200 cursor-default">
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d={brand.icon} />
                  </svg>
                  <span className="font-bold text-sm sm:text-base tracking-tight">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>


      {/* =========================================================================
          3. VOICE STYLES DIRECTORY (MATCHING USER REFERENCE DESIGN WITH SCROLL ANIMATION)
          ========================================================================= */}
      <section 
        ref={voiceStyleSectionRef}
        className="py-20 sm:py-28 relative select-none overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-12">
            
            {/* ————— LEFT CONTENT COLUMN (MATCHING USER REFERENCE DESIGN) ————— */}
            <div 
              className={`w-full xl:max-w-[390px] text-center xl:text-left transition-all duration-700 ease-out ${
                isVoiceStyleVisible ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-8 blur-sm'
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

            {/* ————— 3-ROW ZIGZAG PILL CLUSTER (3 - 2 - 3 ZIGZAG) ————— */}
            <div className="w-full max-w-[790px] flex flex-col gap-y-2.5 sm:gap-y-3.5 py-3 px-1 sm:px-2 overflow-hidden mx-auto xl:mx-0">
              {/* ROW 1: Divya, Shreeraj, Skylar (3 cards, shifted left for zigzag) */}
              <div 
                ref={row1Ref}
                style={{
                  transform: `translateX(${row1Anim.x}px)`,
                  opacity: row1Anim.opacity,
                  filter: `blur(${row1Anim.blur}px)`,
                  transition: 'transform 0.12s ease-out, opacity 0.12s ease-out, filter 0.12s ease-out'
                }}
                className="flex flex-row items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 flex-nowrap shrink-0 -translate-x-2 sm:-translate-x-6 md:-translate-x-8"
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
                        togglePlayAudio();
                      } else {
                        handleSelectVoice(voice);
                      }
                    }}
                  />
                ))}
              </div>

              {/* ROW 2: Sindhu, Niyati (2 cards, shifted right for zigzag) */}
              <div 
                ref={row2Ref}
                style={{
                  transform: `translateX(${row2Anim.x}px)`,
                  opacity: row2Anim.opacity,
                  filter: `blur(${row2Anim.blur}px)`,
                  transition: 'transform 0.12s ease-out, opacity 0.12s ease-out, filter 0.12s ease-out'
                }}
                className="flex flex-row items-center justify-center gap-2 sm:gap-3 flex-nowrap shrink-0 translate-x-3 sm:translate-x-8 md:translate-x-10"
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
                        togglePlayAudio();
                      } else {
                        handleSelectVoice(voice);
                      }
                    }}
                  />
                ))}
              </div>

              {/* ROW 3: Aarav, Aarav (KN), Ishaan (3 cards, shifted left for zigzag) */}
              <div 
                ref={row3Ref}
                style={{
                  transform: `translateX(${row3Anim.x}px)`,
                  opacity: row3Anim.opacity,
                  filter: `blur(${row3Anim.blur}px)`,
                  transition: 'transform 0.12s ease-out, opacity 0.12s ease-out, filter 0.12s ease-out'
                }}
                className="flex flex-row items-center justify-center gap-1.5 xs:gap-2 sm:gap-3 flex-nowrap shrink-0 -translate-x-1 sm:-translate-x-4 md:-translate-x-6"
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
                        togglePlayAudio();
                      } else {
                        handleSelectVoice(voice);
                      }
                    }}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Selected Voice Interactive Sandbox Preview */}
          <div className="mt-12 p-6 sm:p-8 rounded-[28px] bg-white border border-[#D5E1CE] shadow-[0_12px_32px_rgba(20,25,18,0.06)]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl border border-[#D5E1CE] shadow-sm shrink-0 bg-gradient-to-br ${activeVoice.avatarBg} flex items-center justify-center`}>
                  <span className="text-white text-lg font-bold leading-none">{activeVoice.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xl leading-none" role="img" aria-label={activeVoice.country}>{activeVoice.flag}</span>
                    <h4 className="text-xl font-bold text-[#141912]">{activeVoice.name}</h4>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E3EDE0] text-[#003D2B] font-bold border border-[#D3E2CF]">
                      {activeVoice.gender} &bull; {activeVoice.role}
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
                    onClick={() => {
                      if (isPlaying) {
                        togglePlayAudio();
                      } else {
                        playAudioFile(activeVoice.audioSrc);
                      }
                    }}
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


      {/* =========================================================================
          4. INTERACTIVE DTMF & MULTI-LINGUAL CALLING AGENT IVR SIMULATOR
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#E8F0E4]/50 border-y border-[#D5E1CE] relative select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal variant="up" duration={700}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] shadow-xs mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
                <span className="text-xs font-bold text-[#003D2B] tracking-tight">Interactive Telephony Simulator</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-[44px] font-[800] tracking-[-0.03em] text-[#141912] leading-[1.12]">
                DTMF Phone Keypad &amp; Live Calling Agent
              </h2>
              <p className="mt-3 text-[#4E5B49] text-sm sm:text-base max-w-2xl">
                Experience real-time IVR touch-tone routing. Press any key (<strong>1 – 9</strong>) on the dialpad or your keyboard to audition actual regional calling agents across English, Hindi, Kannada, and Marathi.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-full bg-white border border-[#D5E1CE] text-xs font-semibold text-[#141912] shadow-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#003D2B] animate-ping" />
                <span>Dual-Tone Multi-Frequency (DTMF) <strong>Active</strong></span>
              </div>
            </div>
          </div>
          </Reveal>

          {/* ————— THE DUAL-CONSOLE HARDWARE DIALER & ACTIVE AGENT MONITOR ————— */}
          <Reveal variant="up" duration={750} delay={60} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
            
            {/* LEFT: Realistic Phone Keypad Console (5 cols) */}
            <div className="lg:col-span-5 bg-[#0C140E] text-white p-6 sm:p-8 rounded-[32px] border-2 border-[#D5E1CE] shadow-[0_20px_50px_rgba(20,25,18,0.2)] relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/15 text-[11px] font-mono text-white/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C6F56F]" />
                  <span>ANVRiksh TELECOM 5G</span>
                </div>
                <span>TOLL-FREE IVR</span>
              </div>

              {/* Call Screen Status Bar */}
              <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <p className="text-[11px] font-mono text-white/50 uppercase tracking-widest">Connected Route</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className="w-7 h-7 rounded-lg bg-[#003D2B] border border-[#C6F56F]/40 text-[#C6F56F] font-mono font-bold text-sm flex items-center justify-center shadow-xs">
                    {activeDtmfKey}
                  </span>
                  <span className="font-bold text-sm sm:text-base text-white truncate max-w-[240px]">
                    {activeDtmfOption.title}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-center gap-3 text-[11px] font-mono text-white/70">
                  <span className="text-[#C6F56F] font-bold">{activeDtmfOption.nativeLang}</span>
                  <span>&bull;</span>
                  <span>{formatTime(playbackTime)} / {activeDtmfOption.duration}</span>
                  <span>&bull;</span>
                  <span className={isPlaying ? 'text-[#C6F56F] animate-pulse font-bold' : 'text-white/40'}>
                    {isPlaying ? 'STREAMING' : 'READY'}
                  </span>
                </div>
              </div>

              {/* 3x4 DTMF Telephone Keypad Grid */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { key: '1', sub: 'EN', desc: 'Internship' },
                  { key: '2', sub: 'HI', desc: 'बीसीए' },
                  { key: '3', sub: 'KN', desc: 'ಬಿಸಿಎ' },
                  { key: '4', sub: 'EN', desc: 'Deep Tech' },
                  { key: '5', sub: 'KN', desc: 'ತಂತ್ರಜ್ಞಾನ' },
                  { key: '6', sub: 'KN', desc: 'ದೂರಶಿಕ್ಷಣ' },
                  { key: '7', sub: 'HI', desc: 'सपोर्ट' },
                  { key: '8', sub: 'KN', desc: 'ಬೆಂಬಲ' },
                  { key: '9', sub: 'MR', desc: 'सल्लागार' },
                  { key: '*', sub: 'CLEAR', desc: 'Reset' },
                  { key: '0', sub: 'REPLAY', desc: 'Loop' },
                  { key: '#', sub: 'MUTE', desc: 'Pause' },
                ].map(item => {
                  const isKeyActive = activeDtmfKey === item.key;
                  return (
                    <button
                      key={item.key}
                      onClick={() => {
                        if (item.key === '*') {
                          playDtmfTone('*');
                          if (audioRef.current) { audioRef.current.currentTime = 0; }
                        } else if (item.key === '#') {
                          playDtmfTone('#');
                          togglePlayAudio();
                        } else if (item.key === '0') {
                          playDtmfTone('0');
                          if (audioRef.current) {
                            audioRef.current.currentTime = 0;
                            audioRef.current.play();
                            setIsPlaying(true);
                          }
                        } else {
                          handleSelectDtmf(item.key);
                        }
                      }}
                      className={`group py-3.5 px-2 rounded-2xl border transition-all duration-200 flex flex-col items-center justify-center relative active:scale-95 ${
                        isKeyActive
                          ? 'bg-[#003D2B] border-[#C6F56F] text-white shadow-[0_0_20px_rgba(198,245,111,0.25)] ring-2 ring-[#C6F56F]/40'
                          : 'bg-white/10 hover:bg-white/20 border-white/15 text-white/90 hover:text-white'
                      }`}
                    >
                      <span className={`text-2xl font-bold font-mono leading-none ${isKeyActive ? 'text-[#C6F56F]' : 'text-white'}`}>
                        {item.key}
                      </span>
                      <span className="text-[10px] font-mono tracking-wider text-white/60 mt-1 uppercase group-hover:text-white/90">
                        {item.sub}
                      </span>
                      <span className="text-[9px] text-white/40 truncate max-w-full">
                        {item.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Instructions Prompt */}
              <p className="mt-5 text-center text-[11px] font-mono text-white/50">
                <i className="fas fa-keyboard mr-1.5 text-[#C6F56F]" />
                Type digits <strong>1 – 9</strong> on your keyboard to instantly route
              </p>
            </div>

            {/* RIGHT: Active Agent Inspector & Audio Stream (7 cols) */}
            <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-[32px] border border-[#D5E1CE] shadow-[0_12px_40px_rgba(20,25,18,0.06)] flex flex-col justify-between h-full">
              <div>
                
                {/* Agent Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#D5E1CE]">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl border-2 border-[#D5E1CE] shadow-md bg-gradient-to-br from-[#003D2B] to-[#526B3D] flex items-center justify-center">
                        <span className="text-white text-2xl font-bold leading-none">
                          {activeDtmfOption.agentName.charAt(0)}
                        </span>
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#003D2B] border-2 border-white flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#C6F56F] animate-ping" />
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-bold text-[#141912]">{activeDtmfOption.agentName}</h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#E3EDE0] text-[#003D2B] border border-[#D3E2CF]">
                          {activeDtmfOption.nativeLang}
                        </span>
                      </div>
                      <p className="text-xs text-[#616E7C] font-semibold mt-0.5">{activeDtmfOption.agentRole}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#F4F7EE] text-[#003D2B] border border-[#CCD8C3]">
                      DTMF Key [{activeDtmfKey}]
                    </span>
                  </div>
                </div>

                {/* Scenario details */}
                <div className="mt-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#003D2B]">
                    Active Call Scenario &bull; {activeDtmfOption.scenario}
                  </span>
                  <h4 className="text-xl font-bold text-[#141912] mt-1">
                    {activeDtmfOption.title}
                  </h4>
                  <p className="text-sm text-[#4E5B49] mt-2 leading-relaxed">
                    {activeDtmfOption.description}
                  </p>
                </div>

                {/* Frequency Audio Waveform Bars (32 bars) */}
                <div className="my-6 p-4 rounded-2xl bg-[#F4F7EE] border border-[#D5E1CE]">
                  <div className="flex items-center justify-between text-xs text-[#616E7C] mb-2 font-mono">
                    <span>SYNTHETIC NEURAL STREAM</span>
                    <span>{formatTime(playbackTime)} / {activeDtmfOption.duration}</span>
                  </div>
                  <div className="flex items-end justify-between gap-1 h-12">
                    {Array.from({ length: 32 }).map((_, i) => {
                      const h = isPlaying 
                        ? Math.max(12, Math.min(100, (Math.sin(i * 0.7 + playbackTime * 7) * 40 + Math.cos(i * 0.4 + playbackTime * 4) * 30 + 50)))
                        : 16 + (i % 6) * 10;
                      return (
                        <span
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`w-1.5 rounded-full transition-all duration-100 ${
                            isPlaying ? 'bg-[#003D2B]' : 'bg-[#CCD8C3]'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Player Controllers & Scrubber */}
              <div className="pt-4 border-t border-[#D5E1CE] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      if (currentAudioSrc === activeDtmfOption.audioSrc) {
                        togglePlayAudio();
                      } else {
                        playAudioFile(activeDtmfOption.audioSrc);
                      }
                    }}
                    className="px-6 py-2.5 rounded-full bg-[#003D2B] text-white text-xs font-bold hover:bg-[#022D20] transition-all flex items-center gap-2 shadow-sm active:scale-95"
                  >
                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-xs`} />
                    <span>{isPlaying ? 'Pause Stream' : 'Listen Recording'}</span>
                  </button>

                  <button
                    onClick={() => {
                      if (audioRef.current) {
                        audioRef.current.currentTime = 0;
                        audioRef.current.play();
                        setIsPlaying(true);
                      }
                    }}
                    className="p-2.5 rounded-full bg-[#EAEFE5] hover:bg-[#D5E1CE] text-[#003D2B] transition-colors"
                    title="Replay from start"
                  >
                    <i className="fas fa-redo text-xs" />
                  </button>
                </div>

                <div className="flex items-center gap-2 bg-[#F4F7EE] px-3 py-1 rounded-full border border-[#D5E1CE]">
                  <span className="text-[11px] text-[#616E7C] font-semibold">Speed:</span>
                  {[1, 1.25, 1.5].map(rate => (
                    <button
                      key={rate}
                      onClick={() => handleRateChange(rate)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold transition-colors ${
                        playbackRate === rate ? 'bg-[#003D2B] text-white' : 'text-[#4E5B49] hover:text-[#141912]'
                      }`}
                    >
                      {rate}x
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </Reveal>

          {/* ————— AI CALLING MODELS COMPARISON MATRIX ————— */}
          <Reveal variant="up" duration={700} delay={100} className="mt-16 sm:mt-20">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] shadow-xs mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
                <span className="text-xs font-bold text-[#003D2B] tracking-tight">Architecture Comparison Matrix</span>
              </div>
              <h3 className="text-2xl sm:text-4xl md:text-[40px] font-[800] text-[#141912] tracking-[-0.03em] leading-[1.12]">
                Compare our AI calling models
              </h3>
              <p className="mt-3 text-[#4E5B49] text-sm sm:text-base max-w-2xl mx-auto">
                Evaluate the three autonomous calling architectures side-by-side to select the ideal voice flow for your enterprise workflows.
              </p>
            </div>

            {(() => {
              const callingModels = [
                {
                  name: 'One Direction Call',
                  subtitle: 'A fast, automated broadcast agent delivering spoken reminders and notifications with zero latency.',
                  popular: false,
                },
                {
                  name: 'DTMF Keypad Call',
                  subtitle: 'An interactive touch-tone IVR agent with instant keypad routing, OTP capture, and structured qualification.',
                  popular: true,
                },
                {
                  name: 'Bidirectional Voice AI',
                  subtitle: 'An immersive full-duplex conversational voice agent with natural speech understanding and CRM sync.',
                  popular: false,
                },
              ];

              const modelRows: { label: string; cells: Array<string | boolean> }[] = [
                { label: 'Audio flow architecture', cells: ['One-way (Agent to user)', 'Two-way (Voice + Keypad)', 'Full Duplex (2-way voice)'] },
                { label: 'Caller input method', cells: ['Listen only', 'DTMF Phone Keypad (1–9, *, #)', 'Natural Spoken Speech'] },
                { label: 'Neural Text-to-Speech (TTS)', cells: [true, true, true] },
                { label: 'Real-time Speech-to-Text (STT)', cells: [false, false, true] },
                { label: 'Touch-tone (DTMF) decoding', cells: [false, true, true] },
                { label: 'Sub-second response latency', cells: ['< 120ms', '< 220ms', '< 550ms'] },
                { label: 'Live conversational interruption', cells: [false, false, true] },
                { label: 'Multilingual Indian accents', cells: [true, true, true] },
                { label: 'Structured OTP & ID verification', cells: [false, true, true] },
                { label: 'CRM & webhook integration', cells: ['Basic webhook', 'Real-time two-way API', 'Autonomous CRM sync'] },
                { label: 'Automated calendar booking', cells: [false, true, true] },
                { label: 'Ideal enterprise use case', cells: ['Alerts & reminders', 'IVR, admissions & triage', 'Sales qualification & support'] },
              ];

              const renderModelHeader = (model: typeof callingModels[number]) => (
                <div
                  key={model.name}
                  className={`flex min-h-[200px] sm:min-h-[220px] flex-col rounded-[20px] sm:rounded-[24px] p-4 sm:p-7 ${
                    model.popular
                      ? 'bg-[#0C140E] text-white border border-[#003D2B] shadow-[0_16px_40px_rgba(12,20,14,0.28)] md:-translate-y-2'
                      : 'border border-[#D5E1CE] bg-white text-[#141912] shadow-[0_8px_30px_rgba(20,25,18,0.05)]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <h4 className="text-lg sm:text-2xl font-[700] tracking-tight">{model.name}</h4>
                    {model.popular && (
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full bg-[#C6F56F]/20 text-[#C6F56F] font-bold border border-[#C6F56F]/30 shrink-0">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className={`mt-1 sm:mt-1.5 text-xs sm:text-sm leading-relaxed ${model.popular ? 'text-white/70' : 'text-[#616E7C]'}`}>
                    {model.subtitle}
                  </div>
                  <Link
                    to="/company/contact-us"
                    className={`mt-auto pt-3 sm:pt-4 block w-full rounded-full py-2 sm:py-2.5 text-center text-xs sm:text-sm font-bold transition-all ${
                      model.popular
                        ? 'bg-[#003D2B] text-white hover:bg-[#022D20] shadow-[0_4px_16px_rgba(0,61,43,0.3)] hover:scale-[1.02] active:scale-95'
                        : 'border border-[#D5E1CE] bg-white text-[#141912] hover:bg-[#EAEFE5] hover:border-[#003D2B]/40 active:scale-95'
                    }`}
                  >
                    Get started
                  </Link>
                </div>
              );

              return (
                <div className="mt-8">
                  {/* Unified Side-by-Side Matrix Table for All Screens (Swipeable on Mobile) */}
                  <div className="overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-4">
                    {/* Mobile swipe indicator hint */}
                    <div className="md:hidden flex items-center justify-between gap-2 text-xs text-[#616E7C] mb-3 px-1">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <i className="fas fa-arrows-left-right text-[#003D2B]" />
                        <span>Swipe horizontally to compare models side-by-side</span>
                      </span>
                      <span className="text-[10px] font-bold text-[#003D2B] bg-[#E3EDE0] px-2 py-0.5 rounded-full">
                        Side-by-Side
                      </span>
                    </div>

                    <div className="min-w-[660px] md:min-w-0 grid grid-cols-[minmax(150px,1.1fr)_repeat(3,minmax(160px,1fr))] gap-x-3 md:gap-x-4">
                      {/* Top Header Row */}
                      <div className="flex items-end pb-4 font-bold text-sm text-[#616E7C]">
                        Models
                      </div>
                      {callingModels.map(renderModelHeader)}

                      {/* What's included row */}
                      <div className="flex items-end border-b border-[#D5E1CE] pb-4 pt-6 text-xs sm:text-base font-bold text-[#141912] sticky left-0 bg-[#F4F7EE]/95 backdrop-blur-xs">
                        What&apos;s included
                      </div>
                      {callingModels.map((model) => (
                        <div key={`${model.name}-included`} className="border-b border-[#D5E1CE] pb-4 pt-6 text-center text-xs sm:text-sm font-semibold text-[#003D2B]">
                          Included
                        </div>
                      ))}

                      {/* Feature rows */}
                      {modelRows.map((row) => (
                        <React.Fragment key={row.label}>
                          <div className="flex min-h-[52px] sm:min-h-[56px] items-center border-b border-[#D5E1CE] text-xs sm:text-sm font-semibold text-[#141912] pr-2 sticky left-0 bg-[#F4F7EE]/95 backdrop-blur-xs">
                            {row.label}
                          </div>
                          {row.cells.map((cell, index) => (
                            <div key={`${row.label}-${index}`} className="flex min-h-[52px] sm:min-h-[56px] items-center justify-center border-b border-[#D5E1CE] px-2 text-center text-xs sm:text-sm text-[#4E5B49]">
                              {cell === true ? <i className="fas fa-check text-[#003D2B] text-sm" aria-label="Included" /> : null}
                              {cell === false ? <span className="text-[#A3B89F] font-bold" aria-label="Not included">—</span> : null}
                              {typeof cell === 'string' ? <span className="font-medium text-[#141912]">{cell}</span> : null}
                            </div>
                          ))}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </Reveal>

        </div>
      </section>


      {/* =========================================================================
          5. FEATURES SECTION (Bento grid in white cards)
          ========================================================================= */}
      <section className="py-20 sm:py-28 relative select-none">
        <Reveal variant="up" duration={750} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
              <span className="text-xs font-bold text-[#003D2B] tracking-tight">Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-[800] tracking-[-0.03em] text-[#141912] leading-[1.12]">
              Powerful AI voice tools built for everyone
            </h2>
            <p className="mt-3 text-[#4E5B49] text-sm sm:text-base max-w-xl mx-auto">
              From high-velocity marketing campaigns to fully autonomous inbound & outbound phone calling agents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Feature 1: Autonomous Phone Calling Agent */}
            <div className="p-8 rounded-[28px] bg-white border border-[#D5E1CE] shadow-[0_8px_30px_rgba(20,25,18,0.05)] hover:shadow-[0_16px_40px_rgba(0,61,43,0.1)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D5E1CE] flex items-center justify-center text-[#003D2B] mb-6 text-xl group-hover:scale-110 transition-transform">
                <i className="fas fa-phone-volume" />
              </div>
              <h3 className="text-xl font-bold text-[#141912] mb-2">Autonomous Calling Agent</h3>
              <p className="text-sm text-[#616E7C] leading-relaxed">
                Deploy 24/7 intelligent voice agents that answer inbound calls, qualify leads, navigate complex CRM flows, and handle sales follow-ups with sub-second response times.
              </p>
            </div>

            {/* Feature 2: API Integration */}
            <div className="p-8 rounded-[28px] bg-white border border-[#D5E1CE] shadow-[0_8px_30px_rgba(20,25,18,0.05)] hover:shadow-[0_16px_40px_rgba(0,61,43,0.1)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D5E1CE] flex items-center justify-center text-[#003D2B] mb-6 text-xl group-hover:scale-110 transition-transform">
                <i className="fas fa-plug" />
              </div>
              <h3 className="text-xl font-bold text-[#141912] mb-2">API Integration</h3>
              <p className="text-sm text-[#616E7C] leading-relaxed">
                Connect our voice synthesis engine directly with your Twilio, Asterisk, webhooks, mobile apps, and backend CRM systems with clean REST APIs and WebSocket streams.
              </p>
            </div>

            {/* Feature 3: Video Editor & Subtitles */}
            <div className="p-8 rounded-[28px] bg-white border border-[#D5E1CE] shadow-[0_8px_30px_rgba(20,25,18,0.05)] hover:shadow-[0_16px_40px_rgba(0,61,43,0.1)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D5E1CE] flex items-center justify-center text-[#003D2B] mb-6 text-xl group-hover:scale-110 transition-transform">
                <i className="fas fa-closed-captioning" />
              </div>
              <h3 className="text-xl font-bold text-[#141912] mb-2">Video & Subtitle Generator</h3>
              <p className="text-sm text-[#616E7C] leading-relaxed">
                Generate dynamic synchronized subtitles, sound wave visuals, and broadcast audio in one place. Perfect for YouTube shorts, TikTok, reels, and product walk-throughs.
              </p>
            </div>

            {/* Feature 4: Multilingual & Multi-accent */}
            <div className="p-8 rounded-[28px] bg-white border border-[#D5E1CE] shadow-[0_8px_30px_rgba(20,25,18,0.05)] hover:shadow-[0_16px_40px_rgba(0,61,43,0.1)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D5E1CE] flex items-center justify-center text-[#003D2B] mb-6 text-xl group-hover:scale-110 transition-transform">
                <i className="fas fa-globe-americas" />
              </div>
              <h3 className="text-xl font-bold text-[#141912] mb-2">100+ Languages & Dialects</h3>
              <p className="text-sm text-[#616E7C] leading-relaxed">
                Localize your audio across 30+ core languages and 100+ native regional accents with deep linguistic precision and native colloquial phrase awareness.
              </p>
            </div>

            {/* Feature 5: Ultra-realistic Text to Speech */}
            <div className="p-8 rounded-[28px] bg-white border border-[#D5E1CE] shadow-[0_8px_30px_rgba(20,25,18,0.05)] hover:shadow-[0_16px_40px_rgba(0,61,43,0.1)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D5E1CE] flex items-center justify-center text-[#003D2B] mb-6 text-xl group-hover:scale-110 transition-transform">
                <i className="fas fa-waveform" />
              </div>
              <h3 className="text-xl font-bold text-[#141912] mb-2">Ultra-Realistic Neural Speech</h3>
              <p className="text-sm text-[#616E7C] leading-relaxed">
                State-of-the-art transformer architecture captures natural breath pauses, emotional inflection, whisper nuances, and custom pacing that sounds virtually indistinguishable from human talent.
              </p>
            </div>

            {/* Feature 6: Custom Voice Cloning */}
            <div className="p-8 rounded-[28px] bg-white border border-[#D5E1CE] shadow-[0_8px_30px_rgba(20,25,18,0.05)] hover:shadow-[0_16px_40px_rgba(0,61,43,0.1)] hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-2xl bg-[#E3EDE0] border border-[#D5E1CE] flex items-center justify-center text-[#003D2B] mb-6 text-xl group-hover:scale-110 transition-transform">
                <i className="fas fa-fingerprint" />
              </div>
              <h3 className="text-xl font-bold text-[#141912] mb-2">Brand Voice Cloning</h3>
              <p className="text-sm text-[#616E7C] leading-relaxed">
                Replicate your brand ambassador's voice with just a 60-second audio sample. Securely private, isolated to your workspace, and protected by enterprise security guards.
              </p>
            </div>

          </div>

        </Reveal>
      </section>


      {/* =========================================================================
          6. HOW IT WORKS / 4 SIMPLE STEPS
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#EAEFE5]/60 border-y border-[#D5E1CE] relative select-none">
        <Reveal variant="up" duration={750} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E3EDE0] border border-[#D5E1CE] shadow-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003D2B] animate-pulse" />
              <span className="text-xs font-bold text-[#003D2B] tracking-tight">Simple Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-[800] tracking-[-0.03em] text-[#141912] leading-[1.12]">
              Create stunning voiceovers in 4 simple steps
            </h2>
            <p className="mt-3 text-[#4E5B49] text-sm sm:text-base">
              Tailored for every creator, business owner, and enterprise development team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {[
              { num: 1, label: '01', title: 'Write or paste script', desc: 'Quickly draft your message or drop in your ready-to-go text or CRM leads list to get started instantly.' },
              { num: 2, label: '02', title: 'Choose your voice style', desc: 'Select from 100+ natural human-like voices, accents, and emotional tones tailored to your audience.' },
              { num: 3, label: '03', title: 'Fine-tune pitch & emotion', desc: 'Adjust cadence, pitch, pauses, and phonetic emphasis for flawless context-aware delivery.' },
              { num: 4, label: '04', title: 'Export or Deploy Agent', desc: 'Download broadcast-ready lossless audio or connect live telephony for autonomous 24/7 calls.' },
            ].map(step => {
              const isActive = activeStep === step.num;
              return (
                <div 
                  key={step.num}
                  onClick={() => setActiveStep(step.num)}
                  className={`p-7 rounded-[26px] cursor-pointer transition-all duration-300 relative group border ${
                    isActive 
                      ? 'bg-white border-[#003D2B] ring-2 ring-[#003D2B]/15 shadow-[0_12px_32px_rgba(0,61,43,0.12)] scale-[1.02]' 
                      : 'bg-white/80 border-[#D5E1CE] hover:border-[#003D2B]/50 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div className={`text-3xl font-mono font-[800] mb-4 transition-colors ${
                    isActive ? 'text-[#003D2B]' : 'text-[#8B7355] group-hover:text-[#003D2B]'
                  }`}>
                    {step.label}
                  </div>
                  <h4 className="text-lg font-bold text-[#141912] mb-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-[#616E7C] leading-relaxed">{step.desc}</p>
                </div>
              );
            })}

          </div>

        </Reveal>
      </section>

      {/* =========================================================================
          8. HIGH CONVERTING FINAL CTA (Signature Emerald container)
          ========================================================================= */}
      <section className="py-20 sm:py-28 relative overflow-hidden select-none">
        <Reveal variant="scale" duration={700} className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="p-10 sm:p-16 rounded-[36px] bg-gradient-to-br from-[#003D2B] via-[#022D20] to-[#011F16] text-white border border-[#CCD8C3]/50 shadow-[0_24px_60px_rgba(0,61,43,0.35)] relative overflow-hidden">
            
            {/* Ambient blooms */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#C6F56F]/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#8B7355]/20 rounded-full blur-[90px] pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6F56F] animate-pulse" />
              <span>Start Today</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-[800] tracking-[-0.03em] text-white mt-3 max-w-2xl mx-auto leading-tight">
              Start creating stunning voiceovers &amp; calling agents today
            </h2>
            
            <p className="mt-4 text-white/80 text-sm sm:text-base max-w-xl mx-auto">
              Join thousands using ANVRiksh to create lifelike neural voices and automate business phone operations — no studio, no delays.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/company/contact-us"
                className="px-8 py-4 rounded-full text-sm font-bold text-[#003D2B] bg-white hover:bg-[#EAEFE5] shadow-lg transition-all duration-300 w-full sm:w-auto hover:scale-105 active:scale-95"
              >
                Book your free strategy call
              </Link>
              <Link
                to="/"
                className="px-8 py-4 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 w-full sm:w-auto"
              >
                Explore All Solutions
              </Link>
            </div>

          </div>
        </Reveal>
      </section>

    </div>
  );
};

export default CallingAgent;
