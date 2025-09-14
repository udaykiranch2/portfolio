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
  Modal,
  Fade,
  useMediaQuery,
  IconButton,
  Tooltip,
} from "@mui/material";
import { GitHub, Launch, WebAsset, ShoppingCart, TaskAlt, Close } from "@mui/icons-material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from './FadeInSection';
import { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import SectionTitle from './common/SectionTitle';
import { sectionContainerStyle, glassmorphismStyle } from '../styles/commonStyles';

const getProjectIcon = (title: string, theme: any) => {
  const iconStyle = { color: theme.palette.primary.main, marginRight: 1 };
  if (title.toLowerCase().includes('e-commerce')) return <ShoppingCart sx={iconStyle} />;
  if (title.toLowerCase().includes('task')) return <TaskAlt sx={iconStyle} />;
  return <WebAsset sx={iconStyle} />;
};

const ProjectCard = ({ project, index, theme }: any) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [openModal, setOpenModal] = useState(false);


  const handleModalOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenModal(true);
  };

  const handleModalClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenModal(false);
  };

  return (
    <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
      <FadeInSection delay={index * 0.2} direction={index % 2 === 0 ? 'left' : 'right'}>
        <Box
          sx={{
            height: { xs: '280px', sm: '320px' },
            perspective: '1000px',
            cursor: 'pointer',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}
          >
            {/* Front of card */}
            <Card
              sx={{
                ...glassmorphismStyle(theme),
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  zIndex: 1,
                },
                '&:hover': {
                  '&::before': {
                    opacity: 1,
                  },
                  '& .project-title': {
                    transform: 'translateY(0)',
                    opacity: 1,
                  },
                },
              }}
            >
              <CardMedia
                component="img"
                height="100%"
                image={project.image}
                alt={project.title}
                sx={{
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%',
                  transform: 'scale(1.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.15)',
                  }
                }}
              />
              <Box
                className="project-title"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 3,
                  color: 'white',
                  zIndex: 2,
                  transform: 'translateY(20px)',
                  opacity: 0,
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <Typography variant="h6" sx={{
                  fontWeight: 600,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{
                  mt: 1,
                  opacity: 0.9,
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                }}>
                  Click to view details
                </Typography>
              </Box>
            </Card>

            {/* Back of card */}
            <Card sx={{
              ...glassmorphismStyle(theme),
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              overflow: 'auto',
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: theme.palette.primary.main,
                borderRadius: '4px',
              }
            }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
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
                  {getProjectIcon(project.title, theme)}
                  <Typography variant="h6" sx={{
                    color: theme.palette.mode === 'dark' ? '#F1F5F9' : '#0F172A',
                    fontWeight: 600,
                    fontSize: { xs: '1rem', sm: '1.25rem' }
                  }}>
                    {project.title}
                  </Typography>
                </Box>

                <Typography
                  onClick={handleModalOpen}
                  sx={{
                    mb: 2,
                    color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#334155',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.875rem', sm: '0.95rem' },
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    cursor: 'pointer',
                    '&:hover': { color: theme.palette.primary.main }
                  }}
                >
                  {project.description}
                </Typography>

                <Box sx={{
                  flex: 1,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  mb: 2,
                  ...glassmorphismStyle(theme),
                  p: 1.5,
                  borderRadius: '8px',
                }}>
                  {project.technologies.map((tech: string) => (
                    <Tooltip key={tech} title={tech} arrow>
                      <Box
                        sx={{
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
                          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                          transition: 'all 0.3s ease',
                          cursor: 'default',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                          },
                        }}
                      >
                        {tech}
                      </Box>
                    </Tooltip>
                  ))}
                </Box>

                <Box sx={{
                  display: 'flex',
                  gap: 2,
                  mt: 'auto',
                  pt: 1,
                  borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  justifyContent: 'space-around'
                }}>
                  <ProjectButton icon={<GitHub />} href={project.githubLink} label="Code" />
                  <ProjectButton icon={<Launch />} href={project.liveLink} label="Demo" />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </FadeInSection>

      {/* Description Modal */}
      <Modal
        open={openModal}
        onClose={handleModalClose}
        closeAfterTransition
        onClick={(e) => e.stopPropagation()}
      >
        <Fade in={openModal}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: { xs: '90%', sm: '600px' },
              maxHeight: '80vh',
              bgcolor: theme.palette.mode === 'dark' ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
              p: { xs: 2, sm: 4 },
              overflow: 'auto',
              ...glassmorphismStyle(theme),
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: theme.palette.primary.main,
                borderRadius: '4px',
              }
            }}
          >
            <Box sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              mb: 3,
            }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                background: theme.palette.mode === 'dark'
                  ? 'rgba(15, 23, 42, 0.5)'
                  : 'rgba(255, 255, 255, 0.5)',
                padding: '12px 16px',
                borderRadius: '8px',
                flex: 1,
                mr: 2,
              }}>
                {getProjectIcon(project.title, theme)}
                <Typography variant="h5" sx={{
                  color: theme.palette.mode === 'dark' ? '#F1F5F9' : '#0F172A',
                  fontWeight: 600,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' }
                }}>
                  {project.title}
                </Typography>
              </Box>
              <IconButton
                onClick={handleModalClose}
                sx={{
                  color: theme.palette.text.secondary,
                  '&:hover': {
                    color: theme.palette.primary.main,
                  }
                }}
              >
                <Close />
              </IconButton>
            </Box>
            <Typography sx={{
              color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#334155',
              lineHeight: 1.8,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              whiteSpace: 'pre-line'
            }}>
              {project.description}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Grid2>
  );
};

const ProjectButton = ({ icon, href, label }: any) => {
  const theme = useTheme();
  return (
    <Button
      startIcon={icon}
      href={href}
      target="_blank"
      onClick={(e) => e.stopPropagation()}
      sx={{
        color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#334155',
        fontSize: { xs: '0.875rem', sm: '1rem' },
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          color: theme.palette.primary.main,
          background: theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(0, 0, 0, 0.05)',
          transform: 'translateY(-2px)',
        }
      }}
    >
      {label}
    </Button>
  );
};

const Projects = () => {
  const theme = useTheme();
  const { projects } = portfolioConfig;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container id="projects" sx={sectionContainerStyle}>
      <AnimatedBackground
        variant="waves"
        opacity={0.07}
        color={theme.palette.primary.main}
      />
      <FadeInSection>
        <SectionTitle title={projects.title} />
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
        }}
      >
        {projects.items.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} theme={theme} />
        ))}
      </Grid2>
    </Container>
  );
};

export default Projects;
