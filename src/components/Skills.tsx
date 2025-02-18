import { Container, Typography, Grid2, Paper, useTheme, Theme } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from './FadeInSection';
import AnimatedBackground from './AnimatedBackground';
import SectionTitle from './common/SectionTitle';
import { sectionContainerStyle, glassmorphismStyle } from '../styles/commonStyles';

const getIconColor = (theme: Theme, color: string) => {
  const colorMap = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    warning: theme.palette.warning.main,
    info: theme.palette.info.main,
  };
  return colorMap[color as keyof typeof colorMap] || theme.palette.text.primary;
};

const Skills = () => {
  const theme = useTheme();
  const { skills } = portfolioConfig;

  return (
    <Container id="skills" sx={sectionContainerStyle}>
      <AnimatedBackground 
        variant="dots" 
        opacity={0.05} 
        color={theme.palette.secondary.main}
      />
      <FadeInSection>
        <SectionTitle title={skills.title} />
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
                    ...glassmorphismStyle(theme),
                    transition: 'transform 0.2s, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(255, 255, 255, 0.05)'
                        : '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(255, 255, 255, 0.1)',
                    },
                  }}
                  elevation={0}
                >
                  <div className="flex flex-col items-center text-center gap-3">
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
                    <div className="flex flex-col gap-2 mt-1">
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
      </Grid2>
    </Container>
  );
};  

export default Skills;
