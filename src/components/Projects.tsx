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
  IconButton,
  Tooltip,
} from "@mui/material";
import { GitHub, Launch, Close, WebAsset, ShoppingCart, TaskAlt } from "@mui/icons-material";
import { portfolioConfig } from '../config/portfolio.config';
import { useState } from 'react';
import FadeInSection from './FadeInSection';
import SectionTitle from './common/SectionTitle';
import { sectionContainerStyle, glassmorphismStyle } from '../styles/commonStyles';
import { alpha } from '@mui/material/styles';

/**
 * Get project icon based on title
 */
const getProjectIcon = (title: string) => {
  if (title.toLowerCase().includes('e-commerce')) {
    return <ShoppingCart sx={{ color: 'primary.main', fontSize: { xs: 24, sm: 26 } }} />;
  }
  if (title.toLowerCase().includes('task')) {
    return <TaskAlt sx={{ color: 'primary.main', fontSize: { xs: 24, sm: 26 } }} />;
  }
  return <WebAsset sx={{ color: 'primary.main', fontSize: { xs: 24, sm: 26 } }} />;
};

/**
 * Project Button Component
 */
const ProjectButton = ({ icon, href, label, theme }: any) => {
  return (
    <Button
      startIcon={icon}
      href={href}
      target="_blank"
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
      sx={{
        color: 'text.secondary',
        fontSize: { xs: '0.85rem', sm: '0.9rem' },
        fontWeight: 500,
        textTransform: 'none',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        '&:hover': {
          color: 'primary.main',
          background: alpha(theme.palette.primary.main, 0.08),
        },
      }}
    >
      {label}
    </Button>
  );
};

/**
 * Project Card Component
 */
const ProjectCard = ({ project, index, theme }: any) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <FadeInSection delay={index * 0.15} direction="up">
        <Card
          sx={{
            ...glassmorphismStyle(theme),
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            position: 'relative',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: theme.palette.mode === 'dark'
                ? '0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(255, 255, 255, 0.05)'
                : '0 20px 60px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(255, 255, 255, 0.8)',
            },
          }}
          elevation={0}
        >
          {/* Project Image */}
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: '16 / 10',
            }}
          >
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="project-image"
            />
            {/* Overlay on hover */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
              }}
              className="project-overlay"
            />
          </Box>

          {/* Card Content */}
          <CardContent sx={{ p: { xs: 2.5, sm: 3 }, flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Header with icon */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                mb: 2,
                pb: 2,
                borderBottom: `1px solid ${theme.palette.divider}`,
              }}
            >
              {getProjectIcon(project.title)}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '1.1rem', sm: '1.2rem' },
                  color: 'text.primary',
                }}
              >
                {project.title}
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              onClick={handleModalOpen}
              sx={{
                color: 'text.secondary',
                lineHeight: 1.7,
                fontSize: { xs: '0.9rem', sm: '0.95rem' },
                mb: 2,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              {project.description}
            </Typography>

            {/* Technologies */}
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                mb: { xs: 2, sm: 2.5 },
              }}
            >
              {project.technologies.map((tech: string) => (
                <Tooltip key={tech} title={tech} arrow>
                  <Box
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      backgroundColor: theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.06)'
                        : 'rgba(0, 0, 0, 0.05)',
                      color: 'primary.main',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                      border: `1px solid ${theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.08)'
                        : 'rgba(0, 0, 0, 0.08)'}`,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.12),
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {tech}
                  </Box>
                </Tooltip>
              ))}
            </Box>

            {/* Action Buttons */}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                mt: 'auto',
                pt: 2,
                borderTop: `1px solid ${theme.palette.divider}`,
                justifyContent: 'space-around',
              }}
            >
              <ProjectButton icon={<GitHub sx={{ fontSize: 18 }} />} href={project.githubLink} label="Code" theme={theme} />
              <ProjectButton icon={<Launch sx={{ fontSize: 18 }} />} href={project.liveLink} label="Demo" theme={theme} />
            </Box>
          </CardContent>
        </Card>
      </FadeInSection>

      {/* Description Modal */}
      <Modal
        open={openModal}
        onClose={handleModalClose}
        closeAfterTransition
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
              ...glassmorphismStyle(theme),
              p: { xs: 3, sm: 4 },
              overflow: 'auto',
              borderRadius: '20px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                mb: 3,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1 }}>
                {getProjectIcon(project.title)}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  }}
                >
                  {project.title}
                </Typography>
              </Box>
              <IconButton
                onClick={handleModalClose}
                sx={{
                  color: 'text.secondary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                    background: alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                <Close />
              </IconButton>
            </Box>
            <Typography
              sx={{
                color: 'text.secondary',
                lineHeight: 1.8,
                fontSize: { xs: '0.95rem', sm: '1rem' },
                whiteSpace: 'pre-line',
              }}
            >
              {project.description}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

/**
 * Projects Section Component
 */
const Projects = () => {
  const theme = useTheme();
  const { projects } = portfolioConfig;

  return (
    <Container id="projects" sx={sectionContainerStyle}>
      <FadeInSection>
        <SectionTitle title={projects.title} />
      </FadeInSection>

      <Grid2 container spacing={{ xs: 2.5, sm: 3, md: 4 }}>
        {projects.items.map((project, index) => (
          <Grid2 size={{ xs: 12, sm: 6, lg: 4 }} key={project.title}>
            <ProjectCard project={project} index={index} theme={theme} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Projects;
