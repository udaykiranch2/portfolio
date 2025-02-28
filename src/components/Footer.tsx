import { Container, Typography, IconButton, Box, useTheme } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from './FadeInSection';

const SocialLink = ({ Icon, url }: { Icon: React.ElementType, url: string }) => {
  const theme = useTheme();
  
  return (
    <IconButton
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      size="small"
      sx={{
        color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: { xs: '6px', sm: '8px' },
        '&:hover': {
          color: theme.palette.primary.main,
          transform: 'translateY(-3px) scale(1.1)',
          background: 'none'
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          width: '100%',
          transform: 'scaleX(0)',
          height: '1px',
          bottom: 0,
          left: 0,
          backgroundColor: theme.palette.primary.main,
          transformOrigin: 'bottom right',
          transition: 'transform 0.25s ease-out'
        },
        '&:hover::after': {
          transform: 'scaleX(1)',
          transformOrigin: 'bottom left'
        }
      }}
    >
      <Icon sx={{ 
        fontSize: { xs: 16, sm: 18 },
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'rotate(10deg)'
        }
      }} />
    </IconButton>
  );
};

const Footer = () => {
  const theme = useTheme();
  const { footer } = portfolioConfig;

  return (
    <footer>
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: { xs: 2, sm: 3 },
          mt: { xs: 6, sm: 8 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 1.5, sm: 2 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            height: '1px',
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent)',
          }
        }}
      >
        <FadeInSection>
          {/* Social Links */}
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: 3, sm: 6 },
              mb: { xs: 2, sm: 4 },
              '& a': {
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }
            }}
          >
            {footer.socialLinks.map((social, index) => (
              <SocialLink key={index} Icon={social.icon} url={social.url} />
            ))}
          </Box>

          {/* Copyright Text */}
          <Typography 
            variant="caption" 
            component="p"
            align="center"
            sx={{ 
              color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
              fontSize: { xs: '0.7rem', sm: '0.75rem' },
              fontWeight: 400,
              letterSpacing: '0.02em',
              opacity: 0.8,
              mb: { xs: 0.5, sm: 1 },
              transition: 'color 0.3s ease',
              '&:hover': {
                color: theme.palette.primary.main
              }
            }}
          >
            {footer.copyright}
          </Typography>

          {/* Built With Text */}
          <Typography 
            variant="caption" 
            component="p"
            align="center"
            sx={{ 
              color: theme.palette.mode === 'dark' ? '#64748B' : '#64748B',
              fontSize: { xs: '0.65rem', sm: '0.7rem' },
              fontWeight: 400,
              letterSpacing: '0.02em',
              opacity: 0.6,
              transition: 'opacity 0.3s ease',
              '&:hover': {
                opacity: 1
              }
            }}
          >
            Built with React, Material-UI, and ❤️
          </Typography>
        </FadeInSection>
      </Container>
    </footer>
  );
};

export default Footer; 