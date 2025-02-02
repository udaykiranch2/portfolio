import { AppBar, Toolbar, Button, Container, IconButton, useTheme, Typography, Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import { portfolioConfig } from "../config/portfolio.config";
// import image from "../assets/meAi.png";

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

  const scrollToSection = (section: string) => {
    setActiveSection(section.toLowerCase());
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 1 : 0}
      sx={{ 
        backgroundColor: scrolled 
          ? theme.palette.mode === 'dark'
            ? 'rgba(18, 18, 18, 0.8)'
            : 'rgba(255, 255, 255, 0.8)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease-in-out',
        borderBottom: scrolled 
          ? `1px solid ${theme.palette.mode === 'dark' 
              ? 'rgba(255,255,255,0.05)' 
              : 'rgba(0,0,0,0.05)'
            }`
          : 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar 
          sx={{ 
            py: scrolled ? 1 : 2,
            transition: 'all 0.3s ease-in-out'
          }}
          className="justify-between"
        >
          <div className="flex items-center gap-3">
            <Avatar
              src={portfolioConfig.personal.avatar}
              sx={{
                width: 40,
                height: 40,
                border: `2px solid ${theme.palette.primary.main}`,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, #82B1FF 30%, #2979FF 90%)'
                  : 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)',
              }}
            >
              {portfolioConfig.personal.name.charAt(0)}
            </Avatar>
            <Typography 
              variant="h5" 
              sx={{ 
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, #82B1FF 30%, #2979FF 90%)'
                  : 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                letterSpacing: '-0.5px'
              }}
            >
              {portfolioConfig.personal.name}
            </Typography>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-1">
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  sx={{
                    px: 2,
                    py: 1,
                    color: theme.palette.text.primary,
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      bgcolor: 'primary.main',
                      transform: activeSection === item.toLowerCase() 
                        ? 'translateX(0)' 
                        : 'translateX(-100%)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                    '&:hover': {
                      backgroundColor: theme.palette.mode === 'dark' 
                        ? 'rgba(255,255,255,0.05)'
                        : 'rgba(0,0,0,0.05)',
                      '&::before': {
                        transform: 'translateX(0)'
                      }
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
            <IconButton
              onClick={toggleDarkMode}
              sx={{ 
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.mode === 'dark' 
                  ? 'rgba(255,255,255,0.1)' 
                  : 'rgba(0,0,0,0.1)'}`,
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'dark' 
                    ? 'rgba(255,255,255,0.05)'
                    : 'rgba(0,0,0,0.05)',
                }
              }}
            >
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 