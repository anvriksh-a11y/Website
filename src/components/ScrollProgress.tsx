import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? Math.min(1, h.scrollTop / total) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none" aria-hidden="true">
      <div
        className="h-full origin-left"
        style={{
          width: `${progress * 100}%`,
          background: 'linear-gradient(90deg,#003D2B,#1B4D3E 55%,#A7E2AF)',
          boxShadow: '0 0 12px rgba(0,61,43,0.35)',
          transition: 'width 0.08s linear',
        }}
      />
    </div>
  );
}
