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

  // Add flip card toggle function
  const toggleCard = (title: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  // Helper function to get icon based on project type
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
    <Container id="projects" className="py-20">
      <FadeInSection>
        <Typography 
          variant="h4" 
          sx={{
            textAlign: 'center',
            mb: 4,
            color: theme.palette.text.primary
          }}
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
                }}
                onClick={() => toggleCard(project.title)}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.6s',
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
                      bgcolor: theme.palette.background.paper,
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
                      bgcolor: theme.palette.background.paper,
                      overflow: 'auto',
                    }}
                  >
                    <CardContent 
                      sx={{ 
                        height: '100%',
                        display: 'flex', 
                        flexDirection: 'column',
                        p: 2,
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        {getProjectIcon(project.title)}
                        <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                          {project.title}
                        </Typography>
                      </Box>
                      
                      <Typography 
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card flip when clicking text
                          toggleDescription(project.title);
                        }}
                        sx={{ 
                          mb: 1, 
                          color: theme.palette.text.secondary,
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: expandedDescriptions[project.title] ? 'unset' : 5,
                          WebkitBoxOrient: 'vertical',
                          cursor: 'pointer',
                          transition: 'none',
                          '&:hover': {
                            color: `${theme.palette.text.secondary} !important`,
                          }
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Box className="flex flex-wrap gap-1 mb-2" sx={{ flex: 1 }}>
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            style={{
                              padding: '1px 6px',
                              borderRadius: '8px',
                              fontSize: '0.75rem',
                              backgroundColor: theme.palette.mode === 'dark' 
                                ? theme.palette.grey[800]
                                : theme.palette.grey[100],
                              color: theme.palette.primary.main,
                              display: 'inline-block',
                              height: 'fit-content',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </Box>

                      <Box className="flex gap-4" sx={{ mt: 'auto' }}>
                        <Button
                          startIcon={<GitHub />}
                          href={project.githubLink}
                          target="_blank"
                          sx={{ 
                            color: theme.palette.text.secondary,
                            '&:hover': {
                              color: theme.palette.primary.main
                            }
                          }}
                        >
                          Code
                        </Button>
                        <Button
                          startIcon={<Launch />}
                          href={project.liveLink}
                          target="_blank"
                          sx={{ 
                            color: theme.palette.text.secondary,
                            '&:hover': {
                              color: theme.palette.primary.main
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
