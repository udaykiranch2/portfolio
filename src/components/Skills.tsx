import { Container, Typography, Grid2, Paper, useTheme, Theme, Grid } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from './FadeInSection';
import AnimatedBackground from './AnimatedBackground';

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
    <Container 
      id="skills" 
      sx={{ 
        position: 'relative', 
        py: 8,
        scrollMarginTop: '80px'
      }}
    >
      <AnimatedBackground 
        variant="dots" 
        opacity={0.05} 
        color={theme.palette.secondary.main}
      />
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
              // display: 'inline-block',
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
          {skills.title}
        </Typography>
      </FadeInSection>
      <Grid2 container spacing={2}>
        {skills.categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Grid2 size={{ xs: 12, md: 6, lg: 3 }} key={category.category}>
              <FadeInSection delay={index * 0.2}>
                <Paper 
                  sx={{
                    p: 2.5,
                    height: '100%',
                    background: theme.palette.mode === 'dark'
                      ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(30, 41, 59, 0.4))'
                      : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6))',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(255, 255, 255, 0.7)'}`,
                    color: theme.palette.text.primary,
                    transition: 'transform 0.2s, box-shadow 0.3s ease-in-out',
                    borderRadius: '16px',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(255, 255, 255, 0.05)'
                        : '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(255, 255, 255, 0.1)',
                    },
                  }}
                  elevation={0}
                >
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    textAlign: 'center',
                    gap: '12px'
                  }}>
                    <Icon
                      sx={{ 
                        fontSize: '2rem',
                        color: getIconColor(theme, category.iconColor),
                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                      }}
                    />
                    <Typography 
                      variant="subtitle1" 
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        letterSpacing: '0.5px',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-6px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '40px',
                          height: '2px',
                          background: theme.palette.primary.main,
                          borderRadius: '1px'
                        }
                      }}
                    >
                      {category.category}
                    </Typography>
                    <div style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      gap: '8px',
                      marginTop: '4px'
                    }}>
                      {category.skills.map((skill) => (
                        <Typography
                          key={skill}
                          variant="body2"
                          sx={{ 
                            color: theme.palette.text.secondary,
                            fontSize: '0.85rem',
                            lineHeight: 1.5
                          }}
                        >
                          {skill}
                        </Typography>
                      ))}
                    </div>
                  </div>
                </Paper>
              </FadeInSection>
            </Grid2>
          );
        })}
      </Grid2 >
    </Container>
  );
};  

export default Skills;
