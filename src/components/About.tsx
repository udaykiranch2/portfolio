import { Container, Typography, Grid2, Paper, useTheme } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from './FadeInSection';
import SectionTitle from './common/SectionTitle';
import { sectionContainerStyle, glassmorphismStyle } from '../styles/commonStyles';

const About = () => {
  const theme = useTheme();
  const { about } = portfolioConfig;

  return (
    <Container
      id="about"
      sx={sectionContainerStyle}
    >
      <FadeInSection>
        <SectionTitle title={about.title} />
      </FadeInSection>
      <Grid2 container spacing={6}>
        {about.sections.map((section, index) => (
          <Grid2 size={{ xs: 12, md: 6 }} key={index}>
            <FadeInSection delay={index * 0.2}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '250px',
                  ...glassmorphismStyle(theme),
                  transition: 'transform 0.2s, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(255, 255, 255, 0.05)'
                      : '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mb: 2,
                    color: theme.palette.primary.main
                  }}
                >
                  {section.title}
                </Typography>
                <Typography
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {section.content}
                </Typography>
              </Paper>
            </FadeInSection>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default About;
