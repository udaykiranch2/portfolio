import { Box } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeInSection = ({ children, delay = 0 }: FadeInSectionProps) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting);
      });
    }, {
      threshold: 0.1
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
  }, []);

  return (
    <Box
      ref={domRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: `all 0.8s ease-out ${delay}s`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </Box>
  );
};

export default FadeInSection; 