import { useEffect, useCallback, useRef } from 'react';
import { useTheme } from '@mui/material';

interface ScrollAnimationOptions {
  threshold?: number;
  className?: string;
  rootMargin?: string;
}

const ScrollAnimation = ({
  threshold = 0.1,
  className = 'scroll-visible',
  rootMargin = '-10px'
}: ScrollAnimationOptions = {}) => {
  const theme = useTheme();
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      requestAnimationFrame(() => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          // Add scroll index for staggered animations
          if (entry.target.parentElement?.hasAttribute('data-scroll-stagger')) {
            const children = Array.from(entry.target.parentElement.children);
            const index = children.indexOf(entry.target);
            (entry.target as HTMLElement).style.setProperty('--scroll-index', String(index + 1));
          }
        } else {
          entry.target.classList.remove(className);
        }
      });
    });
  }, [className]);

  // Cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-effect';
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"]')) {
        if (cursorRef.current) {
          cursorRef.current.classList.add('active');
          cursorRef.current.style.setProperty(
            '--cursor-color',
            theme.palette.primary.main
          );
        }
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('active');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      cursorRef.current?.remove();
    };
  }, [theme.palette.primary.main]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    });

    // Use a more efficient selector
    const elements = document.querySelectorAll('[data-scroll]');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, [threshold, rootMargin, handleIntersection]);

  return null;
};

export default ScrollAnimation; 