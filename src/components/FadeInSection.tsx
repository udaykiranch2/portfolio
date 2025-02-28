import { Box } from '@mui/material';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  index?: number;
}

const FadeInSection = ({
  children,
  delay = 0,
  duration = 0.6,
  direction,
  index = 0
}: FadeInSectionProps) => {
  const effectiveDirection = direction || (index % 2 === 0 ? 'left' : 'right');


  return (
    <Box
      data-scroll={effectiveDirection}
      sx={{
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