import { useEffect } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  className?: string;
  rootMargin?: string;
}

const ScrollAnimation = ({
  threshold = 0.2,
  className = 'scroll-visible',
  rootMargin = '0px'
}: ScrollAnimationOptions = {}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add class when element enters viewport
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          } else {
            // Remove class when element leaves viewport
            entry.target.classList.remove(className);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    // Observe all elements with data-scroll attribute
    const elements = document.querySelectorAll('[data-scroll]');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [threshold, className, rootMargin]);

  return null;
};

export default ScrollAnimation; 