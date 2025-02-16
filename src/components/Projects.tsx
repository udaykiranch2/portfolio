import {
  Container,
  Typography,
  Grid2,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  useTheme,
} from "@mui/material";
import { GitHub, Launch, WebAsset, ShoppingCart, TaskAlt } from "@mui/icons-material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from './FadeInSection';
import { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';

const Projects = () => {
  const theme = useTheme();
  const { projects } = portfolioConfig;
  const [expandedDescriptions, setExpandedDescriptions] = useState<{[key: string]: boolean}>({});
  const [flippedCards, setFlippedCards] = useState<{[key: string]: boolean}>({});

  const toggleDescription = (title: string) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const toggleCard = (title: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const getProjectIcon = (title: string) => {
    const iconStyle = { 
      color: theme.palette.primary.main,
      marginRight: 1
    };
    
    if (title.toLowerCase().includes('e-commerce')) {
      return <ShoppingCart sx={iconStyle} />;
    } else if (title.toLowerCase().includes('task')) {
      return <TaskAlt sx={iconStyle} />;
    }
    return <WebAsset sx={iconStyle} />;
  };

  return (
    <Container id="projects" 
      sx={{ 
        position: 'relative',
        minHeight: '100vh',
        py: { xs: 12, md: 16 },
        scrollMarginTop: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mb: 8,
      }}>
      <AnimatedBackground 
        variant="waves" 
        opacity={0.07}
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
          {projects.title}
        </Typography>
      </FadeInSection>
      <Grid2 container spacing={2}>
        {projects.items.map((project, index) => (
          <Grid2 size={{ xs: 12, md: 6, lg: 4 }} key={project.title}>
            <FadeInSection delay={index * 0.2}>
              <Box
                sx={{
                  height: '300px',
                  perspective: '1000px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
                onClick={() => toggleCard(project.title)}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: flippedCards[project.title] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Front of card (image only) */}
                  <Card
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.6))'
                        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                      backdropFilter: 'blur(10px)',
                      border: `1px solid ${theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(255, 255, 255, 0.7)'}`,
                      borderRadius: '16px',
                      transition: 'box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out',
                      '&:hover': {
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(255, 255, 255, 0.05)'
                          : '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100%"
                      image={project.image}
                      alt={project.title}
                      sx={{ 
                        objectFit: 'cover',
                        height: '300px',
                        width: '100%'
                      }}
                    />
                  </Card>

                  {/* Back of card (content) */}
                  <Card
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(145deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))'
                        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95))',
                      backdropFilter: 'blur(16px)',
                      border: `1px solid ${theme.palette.mode === 'dark' 
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(255, 255, 255, 0.7)'}`,
                      borderRadius: '16px',
                      overflow: 'auto',
                      transition: 'box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        boxShadow: theme.palette.mode === 'dark'
                          ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(255, 255, 255, 0.05)'
                          : '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  >
                    <CardContent 
                      sx={{ 
                        height: '100%',
                        display: 'flex', 
                        flexDirection: 'column',
                        p: 2.5,
                      }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 2,
                        background: theme.palette.mode === 'dark' 
                          ? 'rgba(15, 23, 42, 0.5)'
                          : 'rgba(255, 255, 255, 0.5)',
                        padding: '8px 12px',
                        borderRadius: '8px',
                      }}>
                        {getProjectIcon(project.title)}
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            color: theme.palette.mode === 'dark' 
                              ? '#F1F5F9' 
                              : '#0F172A',
                            fontWeight: 600,
                            letterSpacing: '0.5px'
                          }}
                        >
                          {project.title}
                        </Typography>
                      </Box>
                      
                      <Typography 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleDescription(project.title);
                        }}
                        sx={{ 
                          mb: 2, 
                          color: theme.palette.mode === 'dark' 
                            ? '#E2E8F0'
                            : '#334155',
                          lineHeight: 1.6,
                          fontSize: '0.95rem',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: expandedDescriptions[project.title] ? 'unset' : 4,
                          WebkitBoxOrient: 'vertical',
                          cursor: 'pointer',
                          transition: 'color 0.2s ease',
                          '&:hover': {
                            color: theme.palette.primary.main
                          }
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box 
                        className="flex flex-wrap gap-1.5 mb-3" 
                        sx={{ 
                          flex: 1,
                          background: theme.palette.mode === 'dark' 
                            ? 'rgba(15, 23, 42, 0.3)'
                            : 'rgba(248, 250, 252, 0.5)',
                          p: 1.5,
                          borderRadius: '8px'
                        }}
                      >
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              padding: '4px 8px',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: 500,
                              backgroundColor: theme.palette.mode === 'dark' 
                                ? 'rgba(51, 65, 85, 0.8)'
                                : 'rgba(241, 245, 249, 0.8)',
                              color: theme.palette.primary.main,
                              display: 'inline-block',
                              height: 'fit-content',
                              whiteSpace: 'nowrap',
                              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </Box>

                      <Box 
                        className="flex gap-4" 
                        sx={{ 
                          mt: 'auto',
                          pt: 1,
                          borderTop: `1px solid ${theme.palette.mode === 'dark' 
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(0, 0, 0, 0.1)'}`
                        }}
                      >
                        <Button
                          startIcon={<GitHub />}
                          href={project.githubLink}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          sx={{ 
                            color: theme.palette.mode === 'dark' 
                              ? '#E2E8F0'
                              : '#334155',
                            '&:hover': {
                              color: theme.palette.primary.main,
                              background: theme.palette.mode === 'dark' 
                                ? 'rgba(255, 255, 255, 0.05)'
                                : 'rgba(0, 0, 0, 0.05)'
                            }
                          }}
                        >
                          Code
                        </Button>
                        <Button
                          startIcon={<Launch />}
                          href={project.liveLink}
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                          sx={{ 
                            color: theme.palette.mode === 'dark' 
                              ? '#E2E8F0'
                              : '#334155',
                            '&:hover': {
                              color: theme.palette.primary.main,
                              background: theme.palette.mode === 'dark' 
                                ? 'rgba(255, 255, 255, 0.05)'
                                : 'rgba(0, 0, 0, 0.05)'
                            }
                          }}
                        >
                          Demo
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </FadeInSection>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Projects;
