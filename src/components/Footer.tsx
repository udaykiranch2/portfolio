import { Container, Typography, IconButton, Box, useTheme } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';

const Footer = () => {
  const theme = useTheme();
  const { footer } = portfolioConfig;

  return (
    <footer style={{ 
      backgroundColor: theme.palette.background.paper,
      borderTop: `1px solid ${
        theme.palette.mode === 'dark' 
          ? 'rgba(255,255,255,0.1)' 
          : 'rgba(0,0,0,0.1)'
      }`,
    }}>
      <Container className="py-8">
        <Box className="flex flex-col md:flex-row justify-between items-center">
          <Typography 
            sx={{ 
              mb: { xs: 4, md: 0 },
              color: theme.palette.text.secondary
            }}
          >
            {footer.copyright}
          </Typography>
          <Box className="flex gap-4">
            {footer.socialLinks.map(({ icon: Icon, url }, index) => (
              <IconButton
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.text.secondary,
                  '&:hover': {
                    color: theme.palette.primary.main
                  }
                }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer; 