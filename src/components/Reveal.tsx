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

    // Graceful fallback for non-browser or environments lacking IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { 
        threshold: 0.08, 
        rootMargin: '0px 0px -40px 0px' 
      }
    );
    obs.observe(el);

    return () => { 
      obs.disconnect(); 
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
