import { Container, Typography, Button, Box, Grid2 } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';
import Profile from './Profile';
import { alpha } from '@mui/material/styles';
import FadeInSection from './FadeInSection';

const Hero = () => {
  const { hero, personal } = portfolioConfig;

  return (
    <Container id="home" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <FadeInSection>
        <Grid2 
          container 
          spacing={{ xs: 6, md: 8 }} 
          alignItems="center"
          sx={{ 
            py: { xs: 4, md: 0 },
            pl: { md: 8 }
          }}
        >
          <Grid2 
            size={{ xs: 12, md: 6 }} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              order: { xs: 2, md: 1 },
              transform: { md: 'scale(1.1)' }
            }}
          >
            <Profile />
          </Grid2>

          <Grid2 
            size={{ xs: 12, md: 6 }} 
            sx={{ 
              order: { xs: 1, md: 2 },
              pl: { md: 4 }
            }}
          >
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: { xs: 2, md: 3 }
            }}>
              <Typography 
                variant="h6" 
                sx={(theme) => ({ 
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
                  }
                })}
              >
                {hero.greeting}
              </Typography>
              
              <Typography 
                variant="h1" 
                sx={(theme) => ({ 
                  color: 'text.primary', 
                  fontWeight: 600,
                  fontSize: {
                    xs: theme.typography.h3.fontSize,
                    md: theme.typography.h2.fontSize
                  },
                  lineHeight: 1.2,
                  animation: 'fadeIn 1s ease-out 0.3s both',
                  background: `linear-gradient(45deg, ${theme.palette.text.primary} 30%, ${theme.palette.primary.main} 90%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: `1px 1px 2px ${alpha(theme.palette.primary.main, 0.1)}`,
                  letterSpacing: '-0.02em',
                  '@keyframes fadeIn': {
                    from: { opacity: 0, transform: 'translateY(20px)' },
                    to: { opacity: 1, transform: 'translateY(0)' }
                  }
                })}
              >
                {personal.name}
              </Typography>

              <Typography 
                variant="h2" 
                sx={(theme) => ({ 
                  color: 'text.secondary',
                  fontSize: {
                    xs: theme.typography.h4.fontSize,
                    md: theme.typography.h3.fontSize
                  },
                  fontWeight: 550,
                  animation: 'fadeIn 1s ease-out 0.6s both'
                })}
              >
                {personal.title}
              </Typography>

              <Typography 
                variant="body1" 
                sx={(theme) => ({ 
                  color: 'text.secondary',
                  maxWidth: theme.spacing(40),
                  fontSize: {
                    xs: theme.typography.body1.fontSize,
                    md: theme.typography.h6.fontSize
                  },
                  lineHeight: 1.7,
                  animation: 'fadeIn 1s ease-out 0.9s both'
                })}
              >
                {hero.tagline}
              </Typography>

              <Box sx={{ 
                display: 'flex', 
                gap: 2, 
                mt: { xs: 2, md: 4 },
                animation: 'fadeIn 1s ease-out 1.2s both'
              }}>
                <Button
                  variant="contained"
                  size="large"
                  href="#contact"
                  sx={(theme) => ({
                    px: 3,
                    py: 1,
                    borderRadius: theme.shape.borderRadius * 1.5,
                    textTransform: 'none',
                    fontSize: theme.typography.body1.fontSize,
                    fontWeight: 500,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    boxShadow: theme.shadows[4],
                    transition: theme.transitions.create(['transform', 'box-shadow', 'background'], {
                      duration: theme.transitions.duration.standard
                    }),
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: theme.shadows[8],
                      background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`
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
                    px: 3,
                    py: 1,
                    borderRadius: theme.shape.borderRadius * 1.5,
                    textTransform: 'none',
                    fontSize: theme.typography.body1.fontSize,
                    fontWeight: 500,
                    borderWidth: '2px',
                    transition: theme.transitions.create(['transform', 'background-color', 'border-color'], {
                      duration: theme.transitions.duration.standard
                    }),
                    '&:hover': {
                      borderWidth: '2px',
                      transform: 'translateY(-2px)',
                      bgcolor: alpha(theme.palette.primary.main, 0.05)
                    }
                  })}
                >
                  {hero.cta.secondary}
                </Button>
              </Box>

              <Box sx={(theme) => ({ 
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
        </Grid2>
      </FadeInSection>
    </Container>
  );
};

export default Hero;
