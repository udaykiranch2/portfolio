import { useEffect } from 'react';

const ScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-scroll]');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('scroll-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};

export default ScrollAnimation; 