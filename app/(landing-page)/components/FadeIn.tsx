'use client';

import { motion } from 'framer-motion';
import { ReactNode, useRef, useState, useEffect } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function FadeIn({ children, delay = 0, className = '', direction = 'up' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-50px' }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  const getInitialY = () => {
    if (direction === 'up') return 30;
    if (direction === 'down') return -30;
    return 0;
  };

  const getInitialX = () => {
    if (direction === 'left') return 30;
    if (direction === 'right') return -30;
    return 0;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: getInitialY(), x: getInitialX() }}
      animate={
        isVisible ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: getInitialY(), x: getInitialX() }
      }
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
