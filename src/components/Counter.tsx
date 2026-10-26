import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    decimals?: number;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = '', decimals = 0 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const startTime = Date.now();

                    const timer = setInterval(() => {
                        const timePassed = Date.now() - startTime;
                        let progress = timePassed / duration;
                        if (progress > 1) progress = 1;

                        // Ease out quart function for smooth animation
                        const ease = 1 - Math.pow(1 - progress, 4);

                        setCount(end * ease);

                        if (progress === 1) {
                            clearInterval(timer);
                        }
                    }, 16); // ~60fps

                    return () => clearInterval(timer);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [end, duration, hasAnimated]);

    return (
        <span ref={countRef}>
            {count.toFixed(decimals)}{suffix}
        </span>
    );
};

export default Counter;
