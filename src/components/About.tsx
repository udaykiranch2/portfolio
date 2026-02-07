import { Container, Typography, Grid2, Paper, useTheme, Box } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from './FadeInSection';
import SectionTitle from './common/SectionTitle';
import { sectionContainerStyle, glassmorphismStyle, cardHoverStyles } from '../styles/commonStyles';

/**
 * About Section Component
 * Clean cards with glassmorphism effect
 */
const About = () => {
  const theme = useTheme();
  const { about } = portfolioConfig;

  return (
    <Container id="about" sx={sectionContainerStyle}>
      <FadeInSection>
        <SectionTitle title={about.title} />
      </FadeInSection>

      <Grid2 container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {about.sections.map((section, index) => (
          <Grid2 size={{ xs: 12, md: 6 }} key={index}>
            <FadeInSection delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 4 },
                  minHeight: { xs: '220px', md: '260px' },
                  ...glassmorphismStyle(theme),
                  ...cardHoverStyles,
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg,
                      ${theme.palette.primary.main}00,
                      ${theme.palette.primary.main},
                      ${theme.palette.secondary.main},
                      ${theme.palette.primary.main}00)`,
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  },
                  '&:hover::before': {
                    opacity: 1,
                  },
                }}
              >
                {/* Section Number */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 16, sm: 20 },
                    right: { xs: 16, sm: 20 },
                    fontSize: { xs: '2.5rem', sm: '3rem' },
                    fontWeight: 800,
                    color: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.03)'
                      : 'rgba(0, 0, 0, 0.03)',
                    lineHeight: 1,
                    pointerEvents: 'none',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </Box>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{
                    mb: { xs: 2, sm: 2.5 },
                    color: 'primary.main',
                    fontSize: { xs: '1.15rem', sm: '1.3rem' },
                    fontWeight: 600,
                    letterSpacing: '0.3px',
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  {section.title}
                </Typography>

                {/* Content */}
                <Typography
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '0.95rem', sm: '1rem' },
                    lineHeight: 1.8,
                    flex: 1,
                  }}
                >
                  {section.content}
                </Typography>

                {/* Decorative corner accent */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    width: '60px',
                    height: '60px',
                    background: `linear-gradient(135deg,
                      ${theme.palette.primary.main}15 0%,
                      transparent 70%)`,
                    clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  }}
                  className="corner-accent"
                />
              </Paper>
            </FadeInSection>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default About;
