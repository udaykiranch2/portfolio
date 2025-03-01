import { Container, Typography, Grid2, Paper, useTheme, Theme, Box, useMediaQuery } from "@mui/material";
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

const SkillCard = ({ category, index, theme }: { category: any, index: number, theme: Theme }) => {
  const Icon = category.icon;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const delay = isMobile ? index * 0.1 : index * 0.2;
  const direction = index % 2 === 0 ? 'left' : 'right';

  return (
    <FadeInSection delay={delay} direction={direction}>
      <Paper
        sx={{
          p: { xs: 2, sm: 2.5, md: 3 },
          height: '100%',
          ...glassmorphismStyle(theme),
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, 
              ${theme.palette.mode === 'dark' ? 'transparent' : theme.palette.background.paper}, 
              ${getIconColor(theme, category.iconColor)}, 
              ${theme.palette.mode === 'dark' ? 'transparent' : theme.palette.background.paper}
            )`,
            opacity: 0,
            transition: 'opacity 0.3s ease',
          },
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: theme.palette.mode === 'dark'
              ? '0 12px 40px rgba(0, 0, 0, 0.35), 0 6px 12px rgba(255, 255, 255, 0.1)'
              : '0 12px 40px rgba(0, 0, 0, 0.12), 0 6px 12px rgba(0, 0, 0, 0.05)',
            '&::before': {
              opacity: 1
            }
          },
        }}
        elevation={0}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: { xs: 2, sm: 2.5, md: 3 },
          position: 'relative',
          zIndex: 1,
        }}>
          <Box sx={{
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60px',
              height: '60px',
              background: `radial-gradient(circle, ${getIconColor(theme, category.iconColor)}20, transparent)`,
              borderRadius: '50%',
              transition: 'all 0.3s ease',
              opacity: 0.5,
            },
            '&:hover::before': {
              width: '70px',
              height: '70px',
              opacity: 0.8,
            }
          }}>
            <Icon
              sx={{
                fontSize: { xs: '2rem', sm: '2.25rem', md: '2.5rem' },
                color: getIconColor(theme, category.iconColor),
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': {
                    transform: 'translateY(0)',
                  },
                  '50%': {
                    transform: 'translateY(-5px)',
                  },
                },
                '&:hover': {
                  transform: 'scale(1.15) rotate(5deg)',
                }
              }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              letterSpacing: '0.5px',
              fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-6px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '2px',
                background: getIconColor(theme, category.iconColor),
                borderRadius: '1px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              },
              '&:hover::after': {
                width: '60px',
                height: '3px',
                boxShadow: `0 0 8px ${getIconColor(theme, category.iconColor)}80`,
              }
            }}
          >
            {category.category}
          </Typography>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 1, sm: 1.5 },
            mt: { xs: 0.5, sm: 1 },
            width: '100%',
          }}>
            {category.skills.map((skill: string, skillIndex: number) => (
              <Box
                key={skill}
                sx={{
                  position: 'relative',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  backgroundColor: theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.03)'
                    : 'rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: `slideIn 0.5s ease-out ${skillIndex * 0.1}s both`,
                  '@keyframes slideIn': {
                    from: {
                      opacity: 0,
                      transform: 'translateX(-10px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                  '&:hover': {
                    backgroundColor: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.06)'
                      : 'rgba(0, 0, 0, 0.04)',
                    transform: 'translateX(5px)',
                  }
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                    fontWeight: 500,
                    lineHeight: 1.5,
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: getIconColor(theme, category.iconColor),
                    }
                  }}
                >
                  {skill}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </FadeInSection>
  );
};

const Skills = () => {
  const theme = useTheme();
  const { skills } = portfolioConfig;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
      <Grid2
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: isMobile ? '-20px' : '-40px',
            right: isMobile ? '-20px' : '-40px',
            width: isMobile ? '150px' : '200px',
            height: isMobile ? '150px' : '200px',
            background: `radial-gradient(circle, ${theme.palette.primary.main}15, transparent 70%)`,
            filter: 'blur(40px)',
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: isMobile ? '-20px' : '-40px',
            left: isMobile ? '-20px' : '-40px',
            width: isMobile ? '150px' : '200px',
            height: isMobile ? '150px' : '200px',
            background: `radial-gradient(circle, ${theme.palette.secondary.main}15, transparent 70%)`,
            filter: 'blur(40px)',
            zIndex: 0,
          }
        }}
      >
        {skills.categories.map((category, index) => (
          <Grid2
            size={{ xs: 12, sm: 6, lg: 3 }}
            key={category.category}
            sx={{ position: 'relative', zIndex: 1 }}
          >
            <SkillCard category={category} index={index} theme={theme} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Skills;
