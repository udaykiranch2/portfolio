import { Container, Typography, Button, Box, Grid2 } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';
import Profile from './Profile';
import { alpha } from '@mui/material/styles';
import FadeInSection from './FadeInSection';
import GradientBackground from './GradientBackground';

const Hero = () => {
  const { hero, personal } = portfolioConfig;

  return (
    <Container 
      id="home" 
      sx={{ 
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        scrollMarginTop: '80px'
      }}
    >
      <GradientBackground />
      
      <FadeInSection>
        <Grid2 container spacing={4} alignItems="center">
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative' }}>
              
              <Typography 
                variant="h5" 
                sx={(theme: any) => ({ 
                  color: 'primary.main', 
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: theme.spacing(0.1),
                  position: 'relative',
                  display: 'inline-block',
                  animation: 'slideIn 1s ease-out',
                  '@keyframes slideIn': {
                    from: { opacity: 0, transform: 'translateX(-20px)' },
                    to: { opacity: 1, transform: 'translateX(0)' }
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: theme.spacing(-0.5),
                    left: 0,
                    width: '2em',
                    height: '2px',
                    bgcolor: 'primary.main',
                    animation: 'widthGrow 0.5s ease-out 0.5s forwards',
                    '@keyframes widthGrow': {
                      from: { width: 0 },
                      to: { width: '2em' }
                    }
                  },
                  mb: 1
                })}
              >
                {hero.greeting}
              </Typography>
              <Typography 
                variant="h1"
                sx={(theme: any) => ({
                  fontWeight: 800,
                  fontSize: {
                    xs: theme.typography.h3.fontSize,
                    md: theme.typography.h2.fontSize
                  },
                  lineHeight: 1.2,
                  animation: 'fadeIn 1s ease-out 0.3s both',
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(135deg, #fff 0%, #60A5FA 50%, #818CF8 100%)'
                    : 'linear-gradient(135deg, #1E293B 0%, #3B82F6 50%, #6366F1 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  textShadow: theme.palette.mode === 'dark'
                    ? '0 0 40px rgba(96, 165, 250, 0.15)'
                    : '0 0 40px rgba(59, 130, 246, 0.15)',
                  letterSpacing: '-0.02em',
                  '@keyframes fadeIn': {
                    from: { opacity: 0, transform: 'translateY(20px)' },
                    to: { opacity: 1, transform: 'translateY(0)' }
                  },
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: 0,
                    width: '80px',
                    height: '4px',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(90deg, #60A5FA, #818CF8)'
                      : 'linear-gradient(90deg, #3B82F6, #6366F1)',
                    borderRadius: '4px',
                    animation: 'widthPulse 2s ease-in-out infinite',
                  },
                  '@keyframes widthPulse': {
                    '0%, 100%': { width: '80px', opacity: 1 },
                    '50%': { width: '100px', opacity: 0.8 }
                  },
                  mb: 2,
                })}
              >
                {personal.name}
              </Typography>
              <Typography 
                variant="h2" 
                sx={(theme: any) => ({ 
                  color: 'text.secondary',
                  fontSize: {
                    xs: theme.typography.h4.fontSize,
                    md: theme.typography.h3.fontSize
                  },
                  fontWeight: 550,
                  animation: 'fadeIn 1s ease-out 0.6s both',
                  mb: 2
                })}
              >
                {personal.title}
              </Typography>

              <Typography 
                variant="body1" 
                sx={(theme: any) => ({ 
                  color: 'text.secondary',
                  maxWidth: theme.spacing(45),
                  fontSize: {
                    xs: theme.typography.body1.fontSize,
                    md: theme.typography.h6.fontSize
                  },
                  lineHeight: 1.7,
                  animation: 'fadeIn 1s ease-out 0.9s both',
                  mb: 4
                })}
              >
                {hero.tagline}
              </Typography>

              <Box sx={{ 
                display: 'flex', 
                gap: 3, 
                mt: { xs: 4, md: 5 },
                animation: 'fadeIn 1s ease-out 1.2s both'
              }}>
                <Button
                  variant="contained"
                  size="large"
                  href="#contact"
                  sx={(theme) => ({
                    px: 4,
                    py: 1.5,
                    borderRadius: '100px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    letterSpacing: '0.3px',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    boxShadow: `0 10px 20px -10px ${alpha(theme.palette.primary.main, 0.5)}`,
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1))',
                      transition: 'transform 0.3s ease-in-out',
                      transform: 'translateX(-100%)',
                    },
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: `0 20px 30px -15px ${alpha(theme.palette.primary.main, 0.7)}`,
                      '&::before': {
                        transform: 'translateX(0)',
                      }
                    },
                    '&:active': {
                      transform: 'translateY(-1px)',
                      boxShadow: `0 5px 15px -5px ${alpha(theme.palette.primary.main, 0.5)}`,
                    }
                  })}
                >
                  {hero.cta.primary}
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  href="#projects"
                  sx={(theme) => ({
                    px: 4,
                    py: 1.5,
                    borderRadius: '100px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 500,
                    letterSpacing: '0.3px',
                    borderWidth: '1.5px',
                    borderColor: theme.palette.mode === 'dark' 
                      ? alpha(theme.palette.primary.main, 0.5)
                      : theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    background: 'transparent',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      borderColor: theme.palette.primary.main,
                      background: theme.palette.mode === 'dark'
                        ? alpha(theme.palette.primary.main, 0.1)
                        : alpha(theme.palette.primary.main, 0.05),
                      boxShadow: `0 10px 20px -10px ${alpha(theme.palette.primary.main, 0.3)}`,
                    },
                    '&:active': {
                      transform: 'translateY(-1px)',
                    }
                  })}
                >
                  {hero.cta.secondary}
                </Button>
              </Box>

              <Box sx={(theme: any) => ({ 
                display: 'flex', 
                gap: 3, 
                mt: 4,
                animation: 'fadeIn 1s ease-out 1.5s both',
                '& > *': {
                  fontSize: theme.typography.h4.fontSize,
                  color: 'text.secondary',
                  cursor: 'pointer',
                  transition: theme.transitions.create(['color', 'transform'], {
                    duration: theme.transitions.duration.shorter
                  }),
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)'
                  }
                }
              })}>
                {hero.socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Icon
                      key={index}
                      sx={{
                        color: 'text.secondary',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          color: 'primary.main',
                          transform: 'translateY(-2px)',
                        }
                      }}
                      onClick={() => window.open(social.url, '_blank')}
                    />
                  );
                })}
              </Box>
            </Box>
          </Grid2>
          
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '10%',
                  left: '10%',
                  width: '80%',
                  height: '80%',
                  background: (theme: any) => `linear-gradient(45deg, ${theme.palette.primary.main}22, ${theme.palette.secondary.main}22)`,
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  animation: 'morphing 15s ease-in-out infinite',
                }
              }}
            >
              <Profile />
            </Box>
          </Grid2>
        </Grid2>
      </FadeInSection>
    </Container>
  );
};

export default Hero;
