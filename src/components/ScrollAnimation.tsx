import { useEffect } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  className?: string;
}

const ScrollAnimation = ({ threshold = 0.8, className = 'scroll-visible' }: ScrollAnimationOptions = {}) => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-scroll]');

      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * threshold;

        if (isVisible) {
          element.classList.add(className);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, className]);

  return null;
};

export default ScrollAnimation; 