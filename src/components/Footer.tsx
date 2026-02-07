import { Container, Typography, IconButton, Box, useTheme } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from './FadeInSection';
import { alpha } from '@mui/material/styles';

/**
 * Social Link Component
 */
const SocialLink = ({ Icon, url }: { Icon: React.ElementType, url: string }) => {
  const theme = useTheme();

  return (
    <IconButton
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      size="small"
      sx={{
        color: 'text.secondary',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        width: 40,
        height: 40,
        '&:hover': {
          color: 'primary.main',
          background: alpha(theme.palette.primary.main, 0.08),
          transform: 'translateY(-4px) scale(1.05)',
        },
      }}
    >
      <Icon sx={{ fontSize: 20 }} />
    </IconButton>
  );
};

/**
 * Footer Component
 */
const Footer = () => {
  const theme = useTheme();
  const { footer } = portfolioConfig;

  return (
    <footer>
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 3, sm: 4 },
          mt: { xs: 8, sm: 12 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 2, sm: 2.5 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            height: '1px',
            background: theme.palette.mode === 'dark'
              ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
              : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)',
          }
        }}
      >
        <FadeInSection>
          {/* Social Links */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 1.5,
              mb: 1,
            }}
          >
            {footer.socialLinks.map((social, index) => (
              <SocialLink key={index} Icon={social.icon} url={social.url} />
            ))}
          </Box>

          {/* Copyright Text */}
          <Typography
            variant="body2"
            component="p"
            align="center"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '0.85rem', sm: '0.9rem' },
              fontWeight: 400,
              letterSpacing: '0.02em',
              opacity: 0.85,
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
              color: 'text.secondary',
              fontSize: { xs: '0.75rem', sm: '0.8rem' },
              fontWeight: 400,
              letterSpacing: '0.02em',
              opacity: 0.7,
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
