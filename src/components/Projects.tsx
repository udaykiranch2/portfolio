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
import { GitHub, Launch } from "@mui/icons-material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from './FadeInSection';

const Projects = () => {
  const theme = useTheme();
  const { projects } = portfolioConfig;

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
              <Card
                sx={{
                  height: '100%',
                  bgcolor: theme.palette.background.paper,
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={project.image}
                  alt={project.title}
                  sx={{ 
                    objectFit: 'cover',
                    borderBottom: `1px solid ${
                      theme.palette.mode === 'dark' 
                        ? 'rgba(255,255,255,0.1)' 
                        : 'rgba(0,0,0,0.1)'
                    }`
                  }}
                />
                <CardContent>
                  <Typography 
                    variant="h6"
                    sx={{ 
                      mb: 2,
                      color: theme.palette.text.primary
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    sx={{ 
                      mb: 2,
                      color: theme.palette.text.secondary 
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '4px 12px',
                          borderRadius: '16px',
                          fontSize: '0.875rem',
                          backgroundColor: theme.palette.mode === 'dark' 
                            ? theme.palette.grey[800]
                            : theme.palette.grey[100],
                          color: theme.palette.primary.main,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </Box>
                  <Box className="flex gap-4">
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
            </FadeInSection>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Projects;
