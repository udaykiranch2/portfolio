import { Container, Typography, Grid2, Paper, useTheme } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from './FadeInSection';

const About = () => {
  const theme = useTheme();
  const { about } = portfolioConfig;

  return (
    <Container
      id="about"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        py: { xs: 12, md: 16 },
        scrollMarginTop: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mb: 8,
      }}
    >
      <FadeInSection>
        <Typography
          variant="h4"
          sx={(theme: any) => ({
            textAlign: 'center',
            color: 'primary.main',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: theme.spacing(0.1),
            position: 'relative',
            animation: 'slideIn 1s ease-out',
            '@keyframes slideIn': {
              from: { opacity: 0, transform: 'translateX(-20px)' },
              to: { opacity: 1, transform: 'translateX(0)' }
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: theme.spacing(-1),
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2em',
              height: '2px',
              bgcolor: 'primary.main',
              animation: 'widthGrow 0.5s ease-out 0.5s forwards',
              '@keyframes widthGrow': {
                from: { width: 0 },
                to: { width: '4em' }
              }
            },
            mb: 3
          })}
        >
          {about.title}
        </Typography>
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
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.6))'
                    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(255, 255, 255, 0.7)'}`,
                  borderRadius: '16px',
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
