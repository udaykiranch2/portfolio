import { AppBar, Toolbar, Button, Container, IconButton, useTheme, Typography, Avatar, Box, Drawer, List, ListItem, ListItemText, useMediaQuery, ListItemButton } from "@mui/material";
import { useState, useEffect } from "react";
import { LightMode, DarkMode, Download, Menu as MenuIcon } from "@mui/icons-material";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import { portfolioConfig } from "../config/portfolio.config";
import { alpha } from "@mui/material/styles";

const NavButton = ({ item, isActive, onClick }: { item: string, isActive: boolean, onClick: () => void }) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      data-color-pop
      sx={{
        position: 'relative',
        px: { xs: 1.5, md: 2 },
        py: { xs: 0.75, md: 1 },
        color: isActive ? 'primary.main' : 'text.primary',
        fontSize: { xs: '0.9rem', md: '1rem' },
        fontWeight: 500,
        textTransform: 'none',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          width: isActive ? '100%' : '0%',
          height: '2px',
          bgcolor: 'primary.main',
          transform: isActive ? 'translateX(-50%)' : 'translateX(-50%) scaleX(0)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '&:hover': {
          color: 'primary.main',
          transform: 'translateY(-2px)',
          bgcolor: theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(0, 0, 0, 0.03)',
          '&::before': {
            width: '80%',
            transform: 'translateX(-50%) scaleX(1)',
          },
        },
        '&:active': {
          transform: 'translateY(0)',
        },
      }}
    >
      {item}
    </Button>
  );
};

const MobileNavItem = ({ item, isActive, onClick }: { item: string, isActive: boolean, onClick: () => void }) => {
  const theme = useTheme();

  return (
    <ListItemButton
      onClick={onClick}
      data-color-pop
      sx={{
        py: 1.5,
        px: 3,
        borderRadius: 2,
        mb: 1,
        color: isActive ? 'primary.main' : 'text.primary',
        bgcolor: isActive
          ? theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(0, 0, 0, 0.03)'
          : 'transparent',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          bgcolor: theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.08)'
            : 'rgba(0, 0, 0, 0.05)',
          transform: 'translateX(8px)',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: '50%',
          height: isActive ? '50%' : '0%',
          width: '3px',
          bgcolor: 'primary.main',
          transform: 'translateY(-50%)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          borderRadius: '0 4px 4px 0',
        },
        '&:hover::before': {
          height: '50%',
        },
      }}
    >
      <ListItemText
        primary={item}
        sx={{
          '& .MuiListItemText-primary': {
            fontSize: '1rem',
            fontWeight: isActive ? 500 : 400,
          },
        }}
      />
    </ListItemButton>
  );
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = portfolioConfig.navigation.items;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (isMobile) {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled ? alpha(theme.palette.background.default, 0.8) : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled
          ? `1px solid ${theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(0, 0, 0, 0.05)'}`
          : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            py: scrolled ? 1 : 1.5,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo/Name Section */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              opacity: scrolled ? 1 : 0.95,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <Avatar
              src={portfolioConfig.personal.avatar}
              sx={{
                width: { xs: 32, sm: 34 },
                height: { xs: 32, sm: 34 },
                border: `1.5px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(45deg, #82B1FF 30%, #2979FF 90%)'
                  : 'linear-gradient(45deg, #1976D2 30%, #2196F3 90%)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'scale(1.05) rotate(5deg)',
                  border: `1.5px solid ${theme.palette.primary.main}`,
                }
              }}
            >
              {portfolioConfig.personal.name.charAt(0)}
            </Avatar>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.1rem' },
                fontWeight: 600,
                letterSpacing: '0.5px',
                background: theme.palette.mode === 'dark'
                  ? `linear-gradient(135deg, ${theme.palette.common.white} 30%, ${alpha(theme.palette.primary.main, 0.9)} 90%)`
                  : `linear-gradient(135deg, ${theme.palette.text.primary} 30%, ${theme.palette.primary.main} 90%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: theme.palette.mode === 'dark'
                  ? '0 2px 4px rgba(0,0,0,0.2)'
                  : '0 2px 4px rgba(0,0,0,0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                '&:hover': {
                  transform: 'translateX(3px) scale(1.02)',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 20%, ${theme.palette.secondary.main} 80%)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  letterSpacing: '0.8px',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  width: '0%',
                  height: '2px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  transition: 'width 0.3s ease',
                  opacity: 0,
                },
                '&:hover::after': {
                  width: '100%',
                  opacity: 1,
                }
              }}
            >
              {portfolioConfig.personal.name}
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: { sm: 0.5, md: 1 },
            }}
          >
            {navItems.map((item) => (
              <NavButton
                key={item}
                item={item}
                isActive={activeSection === item.toLowerCase()}
                onClick={() => scrollToSection(item.toLowerCase())}
              />
            ))}

            {/* Resume Button */}
            <Button
              variant="outlined"
              href={portfolioConfig.resume.link}
              target="_blank"
              startIcon={<Download />}
              sx={{
                ml: { sm: 0.5, md: 1 },
                px: { xs: 1, sm: 1.5 },
                py: 0.7,
                borderRadius: '8px',
                textTransform: 'none',
                fontSize: { xs: '0.75rem', sm: '0.85rem' },
                fontWeight: 500,
                minWidth: 'auto',
                borderColor: theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.12)'
                  : 'rgba(0, 0, 0, 0.12)',
                color: 'text.primary',
                '&:hover': {
                  borderColor: 'primary.main',
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              Resume
            </Button>

            {/* Theme Toggle */}
            <IconButton
              onClick={toggleDarkMode}
              sx={{
                ml: { sm: 1, md: 2 },
                color: theme.palette.text.primary,
                opacity: 0.7,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  opacity: 1,
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  transform: 'rotate(180deg)',
                }
              }}
            >
              {darkMode ? <LightMode sx={{ fontSize: 20 }} /> : <DarkMode sx={{ fontSize: 20 }} />}
            </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 2 }}>
            <IconButton
              onClick={toggleDarkMode}
              sx={{
                color: theme.palette.text.primary,
                opacity: 0.7,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  opacity: 1,
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                  transform: 'rotate(180deg)',
                }
              }}
            >
              {darkMode ? <LightMode sx={{ fontSize: 20 }} /> : <DarkMode sx={{ fontSize: 20 }} />}
            </IconButton>
            <IconButton
              onClick={() => setMobileMenuOpen(true)}
              sx={{
                color: theme.palette.text.primary,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: '75%',
            maxWidth: '300px',
            background: theme.palette.mode === 'dark'
              ? alpha(theme.palette.background.paper, 0.95)
              : alpha(theme.palette.background.paper, 0.95),
            backdropFilter: 'blur(8px)',
          }
        }}
      >
        <Box sx={{ py: 2 }}>
          <List>
            {navItems.map((item) => (
              <MobileNavItem
                key={item}
                item={item}
                isActive={activeSection === item.toLowerCase()}
                onClick={() => scrollToSection(item.toLowerCase())}
              />
            ))}
            <ListItem
              component="a"
              href={portfolioConfig.resume.link}
              target="_blank"
              sx={{
                py: 1.5,
                px: 3,
                mt: 1,
                borderTop: `1px solid ${theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.05)'
                  : 'rgba(0, 0, 0, 0.05)'}`,
              }}
            >
              <ListItemText
                primary="Resume"
                sx={{
                  '& .MuiListItemText-primary': {
                    color: theme.palette.text.primary,
                    fontSize: '0.95rem',
                    fontWeight: 500,
                  }
                }}
              />
              <Download sx={{ ml: 1, fontSize: 20, color: theme.palette.text.secondary }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 