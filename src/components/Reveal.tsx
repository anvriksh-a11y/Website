import React, { useEffect, useRef, useState } from 'react';

type RevealVariant = 'up' | 'fade' | 'scale' | 'left' | 'right' | 'blur';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  variant?: RevealVariant;
  className?: string;
  as?: 'div' | 'span' | 'section';
  once?: boolean;
  y?: number;
}

const baseMap: Record<RevealVariant, string> = {
  up: 'translateY(36px) scale(0.985)',
  fade: 'translateY(0px)',
  scale: 'scale(0.95) translateY(20px)',
  left: 'translateX(-36px)',
  right: 'translateX(36px)',
  blur: 'translateY(20px) scale(0.98)',
};

export default function Reveal({
  children,
  delay = 0,
  duration = 750,
  variant = 'up',
  className = '',
  once = true,
  y,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let stopped = false;

    const check = () => {
      if (stopped) return;
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight || document.documentElement.clientHeight;
      const inView = rect.top < viewH * 0.9 && rect.bottom > viewH * 0.05;
      if (inView) {
        setVisible(true);
        if (once) {
          stopped = true;
          window.removeEventListener('scroll', onScroll, true);
          window.removeEventListener('resize', onScroll);
        }
      } else if (!once) {
        setVisible(false);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(check);
    };

    check();
    window.addEventListener('scroll', onScroll, { passive: true, capture: true });
    window.addEventListener('resize', onScroll);
    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', onScroll);
    };
  }, [once]);

  const hiddenTransform = y !== undefined ? `translateY(${y}px)` : baseMap[variant];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1) translateX(0)' : hiddenTransform,
        filter: visible ? 'blur(0px)' : variant === 'blur' ? 'blur(10px)' : 'blur(0px)',
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1), transform ${duration}ms cubic-bezier(0.16,1,0.3,1), filter ${duration}ms cubic-bezier(0.16,1,0.3,1)`,
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  );
}

export function Stagger({ children, className = '', gap = 90 }: { children: React.ReactNode; className?: string; gap?: number }) {
  const arr = React.Children.toArray(children);
  return (
    <div className={className}>
      {arr.map((child, i) => (
        <Reveal key={i} delay={i * gap} variant="up" duration={750}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}
