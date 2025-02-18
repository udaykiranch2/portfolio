import { Theme } from '@mui/material';

export const sectionContainerStyle = {
  position: 'relative',
  minHeight: '100vh',
  py: { xs: 12, md: 16 },
  scrollMarginTop: '80px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  mb: 8,
};

export const glassmorphismStyle = (theme: Theme) => ({
  background: theme.palette.mode === 'dark'
    ? `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`
    : `linear-gradient(145deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius * 2,
});

export const buttonStyles = (theme: Theme) => ({
  px: 3,
  py: 1.5,
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  fontSize: theme.typography.button.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  transition: theme.transitions.create(['transform', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-2px)',
  },
});

export const cardHoverStyles = (theme: Theme) => ({
  transition: theme.transitions.create(['transform', 'box-shadow']),
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[8],
  },
});

export const gradientTextStyles = (theme: Theme) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}); 