import { Container, Typography, Button, Box, Grid2, useTheme, IconButton } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';
import Profile from './Profile';
import { alpha } from '@mui/material/styles';
import FadeInSection from './FadeInSection';
import GradientBackground from './GradientBackground';

const Hero = () => {
  const { hero, personal } = portfolioConfig;
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      id="home"
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        scrollMarginTop: { xs: '64px', md: '80px' },
        py: { xs: 8, md: 16 },
      }}
    >
      <GradientBackground />

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 0,
          opacity: 0.5,
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '40vw',
            height: '40vw',
            top: '-10%',
            right: '-10%',
            background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 70%)`,
            filter: 'blur(50px)',
            animation: 'pulse 8s ease-in-out infinite',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '35vw',
            height: '35vw',
            bottom: '-10%',
            left: '-10%',
            background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.15)} 0%, transparent 70%)`,
            filter: 'blur(50px)',
            animation: 'pulse 8s ease-in-out infinite alternate',
          },
          '@keyframes pulse': {
            '0%, 100%': {
              transform: 'scale(1) translate(0, 0)',
            },
            '50%': {
              transform: 'scale(1.1) translate(2%, 2%)',
            },
          },
        }}
      />

      <FadeInSection>
        <Grid2 
          container 
          spacing={{ xs: 4, md: 8 }} 
          alignItems="center" 
          sx={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Grid2 
            size={{ xs: 12, md: 7 }} 
            order={{ xs: 2, md: 1 }}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Box sx={{ position: 'relative' }}>
              <Box sx={{ 
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
              }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 500,
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                    mb: { xs: 0.5, md: 0.75 },
                    position: 'relative',
                    display: 'inline-block',
                    transform: 'translateY(0)',
                    animation: 'slideDown 1s ease-out',
                    '@keyframes slideDown': {
                      '0%': {
                        opacity: 0,
                        transform: 'translateY(-20px)',
                      },
                      '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-4px',
                      left: { xs: '50%', md: '0' },
                      transform: { xs: 'translateX(-50%)', md: 'none' },
                      width: '40px',
                      height: '2px',
                      background: `linear-gradient(90deg, 
                        ${theme.palette.primary.main},
                        ${theme.palette.secondary.main})`,
                      animation: 'expandWidth 0.6s ease-out forwards',
                      '@keyframes expandWidth': {
                        '0%': {
                          width: '0px',
                        },
                        '100%': {
                          width: '40px',
                        },
                      },
                    },
                  }}
                >
                  {hero.greeting}
                </Typography>

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    letterSpacing: { xs: '-1px', md: '-1.5px' },
                    lineHeight: 1.2,
                    mt: { xs: 0.5, md: 1 },
                    mb: { xs: 2, md: 3 },
                    background: `linear-gradient(135deg, 
                      ${theme.palette.primary.main} 0%,
                      ${theme.palette.secondary.main} 50%,
                      ${theme.palette.primary.main} 100%)`,
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'shine 5s linear infinite',
                    '@keyframes shine': {
                      '0%': {
                        backgroundPosition: '0% center',
                      },
                      '100%': {
                        backgroundPosition: '200% center',
                      }
                    },
                    position: 'relative',
                    display: 'inline-block',
                    filter: 'drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2))',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '105%',
                      width: '100%',
                      left: 0,
                      height: '10px',
                      background: `linear-gradient(90deg,
                        transparent 0%,
                        ${alpha(theme.palette.primary.main, 0.3)} 50%,
                        transparent 100%)`,
                      filter: 'blur(4px)',
                      animation: 'glow 2s ease-in-out infinite',
                    },
                    '@keyframes glow': {
                      '0%, 100%': {
                        opacity: 0.5,
                        transform: 'scaleX(0.8)',
                      },
                      '50%': {
                        opacity: 1,
                        transform: 'scaleX(1.2)',
                      }
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-3px',
                      left: 0,
                      width: '100%',
                      height: '3px',
                      background: `linear-gradient(90deg, 
                        transparent,
                        ${theme.palette.primary.main},
                        ${theme.palette.secondary.main},
                        ${theme.palette.primary.main},
                        transparent)`,
                      backgroundSize: '200% auto',
                      animation: 'shine 3s linear infinite',
                    }
                  }}
                >
                  {personal.name}
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                    fontWeight: 500,
                    color: theme.palette.mode === 'dark'
                      ? alpha(theme.palette.common.white, 0.7)
                      : alpha(theme.palette.common.black, 0.7),
                    mb: { xs: 3, md: 4 },
                    lineHeight: 1.5,
                    maxWidth: '600px',
                    mx: { xs: 'auto', md: 0 },
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: '-10px',
                      left: { xs: '50%', md: '0' },
                      transform: { xs: 'translateX(-50%)', md: 'none' },
                      width: '60px',
                      height: '3px',
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      borderRadius: '2px',
                    },
                  }}
                >
                  {personal.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    color: theme.palette.text.secondary,
                    mb: { xs: 4, md: 5 },
                    lineHeight: 1.8,
                    maxWidth: '600px',
                    mx: { xs: 'auto', md: 0 },
                  }}
                >
                  {hero.tagline}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 2, sm: 3 },
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    flexWrap: { xs: 'nowrap', sm: 'wrap' },
                    width: '100%',
                    '& > button': {
                      flex: { xs: '1 1 auto', sm: '0 0 auto' },
                      minWidth: { xs: 'auto', sm: '140px' },
                    }
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    href="#contact"
                    sx={(theme) => ({
                      px: { xs: 1.5, md: 3 },
                      py: { xs: 1, md: 1.25 },
                      borderRadius: '100px',
                      textTransform: 'none',
                      fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
                      fontWeight: 500,
                      letterSpacing: '0.3px',
                      whiteSpace: 'nowrap',
                      minWidth: 'auto',
                      '& span': {
                        whiteSpace: 'nowrap',
                        display: 'block',
                      },
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'inherit',
                        borderRadius: 'inherit',
                        transition: 'opacity 0.3s ease-in-out',
                        opacity: 0,
                        filter: 'brightness(1.2)',
                      },
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: `0 10px 20px -10px ${alpha(theme.palette.primary.main, 0.5)}`,
                        '&::before': {
                          opacity: 1,
                        },
                      },
                      '&:active': {
                        transform: 'translateY(-1px)',
                        boxShadow: `0 5px 15px -5px ${alpha(theme.palette.primary.main, 0.5)}`,
                      },
                    })}
                  >
                    <span style={{ position: 'relative', zIndex: 1 }}>{hero.cta.primary}</span>
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    href="#projects"
                    sx={(theme) => ({
                      px: { xs: 1.5, md: 3 },
                      py: { xs: 1, md: 1.25 },
                      borderRadius: '100px',
                      textTransform: 'none',
                      fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
                      fontWeight: 500,
                      letterSpacing: '0.3px',
                      whiteSpace: 'nowrap',
                      minWidth: 'auto',
                      '& span': {
                        whiteSpace: 'nowrap',
                        display: 'block',
                      },
                      borderWidth: '1.5px',
                      borderColor: theme.palette.mode === 'dark'
                        ? alpha(theme.palette.primary.main, 0.5)
                        : theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      background: 'transparent',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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

                <Box
                  sx={{
                    display: 'flex',
                    gap: { xs: 2, md: 3 },
                    mt: { xs: 4, md: 5 },
                    justifyContent: { xs: 'center', md: 'flex-start' },
                  }}
                >
                  {hero.socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <IconButton
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: 'text.secondary',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            color: 'primary.main',
                            transform: 'translateY(-3px)',
                          },
                        }}
                      >
                        <Icon />
                      </IconButton>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Grid2>

          <Grid2 
            size={{ xs: 12, md: 5 }} 
            order={{ xs: 1, md: 2 }}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
              transform: { xs: 'scale(0.9)', md: 'none' },
              ml: { md: -4 },
            }}
          >
            <Profile />
          </Grid2>
        </Grid2>
      </FadeInSection>
    </Container>
  );
};

export default Hero;
