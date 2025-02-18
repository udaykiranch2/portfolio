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
} from "@mui/material";
import { GitHub, Launch, WebAsset, ShoppingCart, TaskAlt } from "@mui/icons-material";
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
  const [isExpanded, setIsExpanded] = useState(false);
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
    <Grid2 size={{ xs: 12, md: 6, lg: 4 }}>
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
            <Card sx={{ ...glassmorphismStyle(theme), position: 'absolute', width: '100%', height: '100%', backfaceVisibility: 'hidden' }}>
              <CardMedia
                component="img"
                height="100%"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'cover', height: '300px', width: '100%' }}
              />
            </Card>

            {/* Back of card */}
            <Card sx={{
              ...glassmorphismStyle(theme),
              position: 'absolute',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              overflow: 'auto'
            }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2.5 }}>
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
                  <Typography variant="h6" sx={{ color: theme.palette.mode === 'dark' ? '#F1F5F9' : '#0F172A', fontWeight: 600, letterSpacing: '0.5px' }}>
                    {project.title}
                  </Typography>
                </Box>

                <Typography
                  onClick={handleModalOpen}
                  sx={{
                    mb: 2,
                    color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#334155',
                    lineHeight: 1.6,
                    fontSize: '0.95rem',
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
                        // borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        overflow: 'auto',
                        ...glassmorphismStyle(theme),
                      }}
                    >
                      <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                        background: theme.palette.mode === 'dark'
                          ? 'rgba(15, 23, 42, 0.5)'
                          : 'rgba(255, 255, 255, 0.5)',
                        padding: '12px 16px',
                        borderRadius: '8px',
                      }}>
                        {getProjectIcon(project.title, theme)}
                        <Typography variant="h5" sx={{ 
                          color: theme.palette.mode === 'dark' ? '#F1F5F9' : '#0F172A',
                          fontWeight: 600
                        }}>
                          {project.title}
                        </Typography>
                      </Box>
                      <Typography sx={{
                        color: theme.palette.mode === 'dark' ? '#E2E8F0' : '#334155',
                        lineHeight: 1.8,
                        fontSize: '1rem',
                        whiteSpace: 'pre-line'
                      }}>
                        {project.description}
                      </Typography>
                    </Box>
                  </Fade>
                </Modal>

                <Box className="flex flex-wrap gap-1.5 mb-3" sx={{ flex: 1, ...glassmorphismStyle(theme), p: 1.5 }}>
                  {project.technologies.map((tech: string) => (
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

                <Box className="flex gap-4" sx={{ mt: 'auto', pt: 1, borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}` }}>
                  <ProjectButton icon={<GitHub />} href={project.githubLink} label="Code" />
                  <ProjectButton icon={<Launch />} href={project.liveLink} label="Demo" />
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </FadeInSection>
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
        '&:hover': {
          color: theme.palette.primary.main,
          background: theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(0, 0, 0, 0.05)'
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

  return (
    <Container id="projects" sx={sectionContainerStyle}>
      <AnimatedBackground variant="waves" opacity={0.07} />
      <FadeInSection>
        <SectionTitle title={projects.title} />
      </FadeInSection>
      <Grid2 container spacing={2}>
        {projects.items.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} theme={theme} />
        ))}
      </Grid2>
    </Container>
  );
};

export default Projects;
