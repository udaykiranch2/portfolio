import { Container, Typography, IconButton, Box, useTheme } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from './FadeInSection';

const Footer = () => {
  const theme = useTheme();
  const { footer } = portfolioConfig;
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: 3,
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <FadeInSection>
          {/* Social Links */}
          <Box 
            className="flex justify-center gap-6 mb-4"
            sx={{
              '& a': {
                transition: 'all 0.2s ease-in-out',
              }
            }}
          >
            {footer.socialLinks.map(({ icon: Icon, url }, index) => (
              <IconButton
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
                  transition: 'all 0.2s ease-in-out',
                  padding: '8px',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateY(-2px)',
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
                <Icon sx={{ fontSize: 18 }} />
              </IconButton>
            ))}
          </Box>

          {/* Copyright Text */}
          <Typography 
            variant="caption" 
            component="p"
            align="center"
            sx={{ 
              color: theme.palette.mode === 'dark' ? '#94A3B8' : '#475569',
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.02em',
              opacity: 0.8,
              mb: 1
            }}
          >
            {portfolioConfig.footer.copyright}
          </Typography>

          {/* Built With Text */}
          <Typography 
            variant="caption" 
            component="p"
            align="center"
            sx={{ 
              color: theme.palette.mode === 'dark' ? '#64748B' : '#64748B',
              fontSize: '0.7rem',
              fontWeight: 400,
              letterSpacing: '0.02em',
              opacity: 0.6
            }}
          >
          </Typography>
        </FadeInSection>
      </Container>
    </footer>
  );
};

export default Footer; 