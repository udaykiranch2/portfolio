import { AppBar, Toolbar, Button, Container, IconButton, useTheme, Typography, Avatar, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { LightMode, DarkMode, Download } from "@mui/icons-material";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import { portfolioConfig } from "../config/portfolio.config";
import { alpha } from "@mui/material/styles";
// import image from "../assets/meAi.png";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useCustomTheme();
  const theme = useTheme();

  const navItems = portfolioConfig.navigation.items;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find which section is currently in view
      const sections = navItems.map(item => ({
        id: item.toLowerCase(),
        element: document.getElementById(item.toLowerCase())
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (sectionId: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ 
        background: 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled 
          ? `1px solid ${theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.05)' 
              : 'rgba(0, 0, 0, 0.05)'}`
          : 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          sx={{ 
            py: scrolled ? 1 : 1.5,
            transition: 'all 0.3s ease-in-out'
          }}
          className="justify-between"
        >
          {/* Logo/Name Section */}
          <Box 
            className="flex items-center gap-3" 
            sx={{ 
              opacity: scrolled ? 1 : 0.95,
              transition: 'opacity 0.3s ease'
            }}
          >
            <Avatar
              src={portfolioConfig.personal.avatar}
              sx={{
                width: 34,
                height: 34,
                border: `1.5px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, #82B1FF 30%, #2979FF 90%)'
                  : 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              {portfolioConfig.personal.name.charAt(0)}
            </Avatar>
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: theme.palette.text.primary,
                letterSpacing: '0.2px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: theme.palette.primary.main
                }
              }}
            >
              {portfolioConfig.personal.name}
            </Typography>
          </Box>

          {/* Navigation Items */}
          <Box className="flex items-center gap-2">
            <Box className="hidden md:flex">
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={handleNavClick(item.toLowerCase())}
                  sx={{
                    mx: 1.5,
                    py: 1,
                    px: 1.5,
                    color: activeSection === item.toLowerCase() 
                      ? 'primary.main' 
                      : 'text.primary',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    letterSpacing: '0.3px',
                    textTransform: 'none',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: activeSection === item.toLowerCase() ? '100%' : '0%',
                      height: '2px',
                      backgroundColor: 'primary.main',
                      transition: 'all 0.3s ease-in-out',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Resume Button */}
            <Button
              variant="outlined"
              href={portfolioConfig.resume.link}
              target="_blank"
              startIcon={<Download />}
              sx={{
                ml: 2,
                px: 2,
                py: 0.7,
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                borderColor: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.12)' 
                  : 'rgba(0, 0, 0, 0.12)',
                color: 'text.primary',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: 'transparent',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.2s ease-in-out'
              }}
            >
              Resume
            </Button>

            {/* Theme Toggle */}
            <IconButton
              onClick={toggleDarkMode}
              sx={{
                ml: 2,
                color: theme.palette.text.primary,
                opacity: 0.7,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  opacity: 1,
                  backgroundColor: 'transparent',
                  transform: 'rotate(10deg)'
                }
              }}
            >
              {darkMode ? <LightMode sx={{ fontSize: 20 }} /> : <DarkMode sx={{ fontSize: 20 }} />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 