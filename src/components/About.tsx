import { Container, Typography, Grid2, Paper, useTheme } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';

const About = () => {
  const theme = useTheme();
  const { about } = portfolioConfig;

  return (
    <Container id="about" className="py-16">
      <Typography 
        variant="h4" 
        sx={{
          textAlign: 'center',
          mb: 4,
          color: theme.palette.text.primary
        }}
      >
        {about.title}
      </Typography>
      <Grid2 container spacing={6}>
        {about.sections.map((section, index) => (
          <Grid2 size={{ xs: 12, md: 6 }} key={index}>
            <Paper 
              sx={{
                p: 4,
                height: '100%',
                bgcolor: theme.palette.background.paper,
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
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default About;
