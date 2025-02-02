import { Container, Typography, Grid2, Paper, useTheme, Theme } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';

const getIconColor = (theme: Theme, color: string) => {
  switch (color) {
    case "primary":
      return theme.palette.primary.main;
    case "secondary":
      return theme.palette.secondary.main;
    case "warning":
      return theme.palette.warning.main;
    case "info":
      return theme.palette.info.main;
    default:
      return theme.palette.text.primary;
  }
};

const Skills = () => {
  const theme = useTheme();
  const { skills } = portfolioConfig;

  return (
    <Container id="skills" className="py-16">
      <Typography 
        variant="h4" 
        sx={{
          textAlign: 'center',
          mb: 4,
          color: theme.palette.text.primary
        }}
      >
        {skills.title}
      </Typography>
      <Grid2 container spacing={2}>
        {skills.categories.map((category) => {
          const Icon = category.icon;
          return (
            <Grid2 size={{ xs: 12, sm: 6, md: 3 }} key={category.category}>
              <Paper 
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: theme.palette.background.paper,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
                elevation={0}
              >
                <div className="flex flex-col items-center text-center">
                  <Icon
                    sx={{ 
                      fontSize: '2rem',
                      color: getIconColor(theme, category.iconColor), 
                      mb: 1.5
                    }}
                  />
                  <Typography 
                    variant="subtitle1" 
                    sx={{
                      my: 2,
                      color: theme.palette.text.primary
                    }}
                  >
                    {category.category}
                  </Typography>
                  <div className="space-y-1">
                    {category.skills.map((skill) => (
                      <Typography
                        key={skill}
                        variant="body2"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        {skill}
                      </Typography>
                    ))}
                  </div>
                </div>
              </Paper>
            </Grid2>
          );
        })}
      </Grid2>
    </Container>
  );
};

export default Skills; 