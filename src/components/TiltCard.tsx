import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  style?: React.CSSProperties;
}

export default function TiltCard({ children, className = '', maxTilt = 6, style }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHover, setIsHover] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -maxTilt * 2;
    const ry = (px - 0.5) * maxTilt * 2;
    setTransform(`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`);
    setGlowPos({ x: px * 100, y: py * 100 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => { setTransform('perspective(900px) rotateX(0deg) rotateY(0deg)'); setIsHover(false); }}
      className={`${className} relative`}
      style={{
        transform,
        transition: isHover ? 'transform 0.12s ease-out' : 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      {/* Cursor-tracking glass highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-[1]"
        style={{
          opacity: isHover ? 1 : 0,
          transition: 'opacity 0.3s',
          background: `radial-gradient(480px circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,255,255,0.14), rgba(255,170,80,0.06) 42%, transparent 68%)`,
        }}
      />
      <div className="relative z-[2]">{children}</div>
    </div>
  );
}
