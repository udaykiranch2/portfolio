import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const FadeInSection = ({ 
  children, 
  delay = 0, 
  threshold = 0.1,
  duration = 0.6,
  distance = 30,
  direction = 'up'
}: FadeInSectionProps) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Once element is visible, we can stop observing
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    }, {
      threshold,
      rootMargin: '50px'
    });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  const getTransform = () => {
    const transforms = {
      up: `translateY(${distance}px)`,
      down: `translateY(-${distance}px)`,
      left: `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`
    };
    return transforms[direction];
  };

  return (
    <Box
      ref={domRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate3d(0, 0, 0)' : getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, 
                    transform ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        willChange: 'opacity, transform',
        position: 'relative',
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}
    >
      {children}
    </Box>
  );
};

export default FadeInSection; 