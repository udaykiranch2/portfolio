import { Theme } from '@mui/material';

/**
 * Common container style for all sections
 * Provides consistent spacing and layout
 */
export const sectionContainerStyle = {
  position: 'relative' as const,
  minHeight: '90vh',
  py: { xs: 8, md: 10 },
  scrollMarginTop: '80px',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  mb: { xs: 4, md: 6 },
};

/**
 * Glassmorphism style for cards and panels
 * Clean, modern frosted glass effect
 */
export const glassmorphismStyle = (theme: Theme) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(15, 23, 42, 0.6)'
    : 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(16px) saturate(180%)',
  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
  border: `1px solid ${theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.08)'
    : 'rgba(255, 255, 255, 0.3)'}`,
  borderRadius: '16px',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
    : '0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
});

/**
 * Enhanced glassmorphism with subtle gradient
 */
export const glassmorphismEnhancedStyle = (theme: Theme) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(30, 41, 59, 0.6) 100%)'
    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(248, 250, 252, 0.7) 100%)',
  backdropFilter: 'blur(20px) saturate(180%)',
  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
  border: `1px solid ${theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.1)'
    : 'rgba(255, 255, 255, 0.5)'}`,
  borderRadius: '20px',
  boxShadow: theme.palette.mode === 'dark'
    ? '0 12px 48px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
    : '0 12px 48px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 1)',
});

/**
 * Subtle card hover effect - minimal lift
 */
export const cardHoverStyles = {
  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: (theme: Theme) => theme.palette.mode === 'dark'
      ? '0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(255, 255, 255, 0.05)'
      : '0 20px 60px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(255, 255, 255, 0.8)',
  },
};

/**
 * Gradient text style for headings
 */
export const gradientTextStyles = (theme: Theme, colors?: { start: string; end: string }) => ({
  background: `linear-gradient(135deg,
    ${colors?.start || theme.palette.primary.main} 0%,
    ${colors?.end || theme.palette.secondary.main} 50%,
    ${colors?.start || theme.palette.primary.main} 100%)`,
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  animation: 'shimmer 8s linear infinite',
});

/**
 * Modern button styles
 */
export const buttonStyles = (theme: Theme, variant: 'primary' | 'secondary' | 'outline' = 'primary') => {
  const baseStyles = {
    px: 3,
    py: 1.5,
    borderRadius: '12px',
    textTransform: 'none' as const,
    fontSize: '0.95rem',
    fontWeight: 500,
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  };

  const variants = {
    primary: {
      ...baseStyles,
      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
      color: '#fff',
      boxShadow: `0 4px 16px -8px ${theme.palette.primary.main}99`,
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: `0 8px 24px -8px ${theme.palette.primary.main}cc`,
      },
    },
    secondary: {
      ...baseStyles,
      background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
      color: '#fff',
      boxShadow: `0 4px 16px -8px ${theme.palette.secondary.main}99`,
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: `0 8px 24px -8px ${theme.palette.secondary.main}cc`,
      },
    },
    outline: {
      ...baseStyles,
      background: 'transparent',
      border: `1.5px solid ${theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.15)'
        : 'rgba(0, 0, 0, 0.1)'}`,
      color: theme.palette.text.primary,
      '&:hover': {
        transform: 'translateY(-2px)',
        background: theme.palette.mode === 'dark'
          ? 'rgba(255, 255, 255, 0.05)'
          : 'rgba(0, 0, 0, 0.03)',
        borderColor: theme.palette.primary.main,
      },
    },
  };

  return variants[variant];
};

/**
 * Navigation button style
 */
export const navButtonStyles = (isActive: boolean, theme: Theme) => ({
  px: 2,
  py: 1,
  color: isActive ? 'primary.main' : 'text.primary',
  fontSize: '0.95rem',
  fontWeight: isActive ? 600 : 500,
  textTransform: 'none' as const,
  borderRadius: '10px',
  position: 'relative' as const,
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: isActive ? '100%' : '0%',
    height: '2px',
    bgcolor: 'primary.main',
    transform: 'translateX(-50%)',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  '&:hover': {
    color: 'primary.main',
    background: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(0, 0, 0, 0.03)',
    '&::before': {
      width: '80%',
    },
  },
});

/**
 * Input field styles
 */
export const inputStyles = (theme: Theme) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    backgroundColor: theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.03)'
      : 'rgba(255, 255, 255, 0.5)',
    '& fieldset': {
      borderWidth: '1px',
      borderColor: theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, 0.1)'
        : 'rgba(0, 0, 0, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1.5px',
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiInputLabel-root': {
    fontSize: '0.9rem',
  },
});

/**
 * Scroll progress indicator style
 */
export const scrollProgressStyle = (color: string) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '2px',
  background: `linear-gradient(90deg, ${color}, ${color}99)`,
  transformOrigin: 'left',
  zIndex: 9999,
  transition: 'transform 0.1s linear',
});

/**
 * Floating action button style
 */
export const fabStyles = (theme: Theme) => ({
  position: 'fixed' as const,
  bottom: 32,
  right: 32,
  width: 48,
  height: 48,
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 8px 24px -8px ${theme.palette.primary.main}cc`,
  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
  opacity: 0,
  visibility: 'hidden',
  transform: 'translateY(20px)',
  '&.visible': {
    opacity: 1,
    visibility: 'visible',
    transform: 'translateY(0)',
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 12px 32px -8px ${theme.palette.primary.main}ff`,
  },
});
