import { Container, Typography, Grid2, Paper, useTheme, Box } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from './FadeInSection';
import SectionTitle from './common/SectionTitle';
import { sectionContainerStyle, glassmorphismStyle } from '../styles/commonStyles';
import AnimatedBackground from './AnimatedBackground';

const About = () => {
  const theme = useTheme();
  const { about } = portfolioConfig;

  return (
    <Container
      id="about"
      sx={sectionContainerStyle}
    >
      <AnimatedBackground 
        variant="dots" 
        opacity={0.05} 
        color={theme.palette.primary.main}
      />
      <FadeInSection>
        <SectionTitle title={about.title} />
      </FadeInSection>
      <Grid2 container spacing={{ xs: 2, sm: 4, md: 6 }}>
        {about.sections.map((section, index) => (
          <Grid2 size={{ xs: 12, md: 6 }} key={index}>
            <FadeInSection delay={index * 0.2} direction={index % 2 === 0 ? 'left' : 'right'}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, sm: 4 },
                  minHeight: { xs: '200px', sm: '250px' },
                  ...glassmorphismStyle(theme),
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}00, ${theme.palette.primary.main}, ${theme.palette.primary.main}00)`,
                    transition: 'opacity 0.3s ease',
                    opacity: 0
                  },
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(255, 255, 255, 0.05)'
                      : '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(255, 255, 255, 0.1)',
                    '&::before': {
                      opacity: 1
                    }
                  }
                }}
              >
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: { xs: 1.5, sm: 2 },
                      color: theme.palette.primary.main,
                      fontSize: { xs: '1.25rem', sm: '1.5rem' },
                      fontWeight: 600,
                      position: 'relative',
                      display: 'inline-block',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        width: '2em',
                        height: '2px',
                        background: theme.palette.primary.main,
                        transition: 'width 0.3s ease',
                      },
                      '&:hover::after': {
                        width: '3em'
                      }
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.text.secondary,
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      lineHeight: 1.8,
                      flex: 1,
                      position: 'relative',
                      zIndex: 1,
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-20px',
                        right: '-20px',
                        width: '100px',
                        height: '100px',
                        background: `radial-gradient(circle, ${theme.palette.primary.main}10, transparent 70%)`,
                        zIndex: -1,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover::before': {
                        opacity: 1
                      }
                    }}
                  >
                    {section.content}
                  </Typography>
                </Box>
              </Paper>
            </FadeInSection>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default About;
