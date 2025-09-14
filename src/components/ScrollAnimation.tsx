import { useEffect, useCallback } from 'react';

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
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      requestAnimationFrame(() => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
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


  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    });

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