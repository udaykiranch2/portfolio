import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { useEffect, useState } from "react";
import { DarkMode, Download, LightMode, Menu as MenuIcon, KeyboardArrowUp } from "@mui/icons-material";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import { portfolioConfig } from "../config/portfolio.config";
import { alpha } from "@mui/material/styles";
import { navButtonStyles } from "../styles/commonStyles";

/**
 * Desktop Navigation Button
 */
const NavButton = ({ item, isActive, onClick }: { item: string, isActive: boolean, onClick: () => void }) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      data-color-pop
      sx={navButtonStyles(isActive, theme)}
    >
      {item}
    </Button>
  );
};

/**
 * Mobile Navigation Item
 */
const MobileNavItem = ({ item, isActive, onClick }: { item: string, isActive: boolean, onClick: () => void }) => {
  const theme = useTheme();

  return (
    <ListItemButton
      onClick={onClick}
      data-color-pop
      sx={{
        py: 2,
        px: 3,
        mx: 1,
        my: 0.5,
        borderRadius: '12px',
        color: isActive ? 'primary.main' : 'text.primary',
        bgcolor: isActive
          ? theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(0, 0, 0, 0.03)'
          : 'transparent',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
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
          height: isActive ? '60%' : '0%',
          width: '3px',
          bgcolor: 'primary.main',
          transform: 'translateY(-50%)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          borderRadius: '0 4px 4px 0',
        },
        '&:hover::before': {
          height: '60%',
        },
      }}
    >
      <ListItemText
        primary={item}
        sx={{
          '& .MuiListItemText-primary': {
            fontSize: '1rem',
            fontWeight: isActive ? 600 : 500,
          },
        }}
      />
    </ListItemButton>
  );
};

/**
 * Main Navbar Component
 * Features floating glassmorphism design with scroll progress
 */
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { darkMode, toggleDarkMode } = useCustomTheme();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = portfolioConfig.navigation.items;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 30);
      setShowScrollTop(scrollY > 500);

      const sections = navItems.map(item => ({
        id: item.toLowerCase(),
        element: document.getElementById(item.toLowerCase())
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? theme.palette.mode === 'dark'
              ? 'rgba(15, 23, 42, 0.85)'
              : 'rgba(255, 255, 255, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          borderBottom: scrolled
            ? `1px solid ${theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.06)'
              : 'rgba(0, 0, 0, 0.06)'}`
            : 'none',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              py: scrolled ? 1.5 : 2,
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              justifyContent: 'space-between',
            }}
          >
            {/* Logo/Name Section */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <Avatar
                src={portfolioConfig.personal.avatar}
                sx={{
                  width: { xs: 36, sm: 40 },
                  height: { xs: 36, sm: 40 },
                  border: `2px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: `0 4px 12px -4px ${alpha(theme.palette.primary.main, 0.4)}`,
                  '&:hover': {
                    transform: 'scale(1.05) rotate(5deg)',
                    border: `2px solid ${theme.palette.primary.main}`,
                  },
                }}
              >
                {portfolioConfig.personal.name.charAt(0)}
              </Avatar>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1.05rem', sm: '1.15rem' },
                  fontWeight: 600,
                  letterSpacing: '0.3px',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    transform: 'translateX(4px)',
                  },
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
                gap: 0.5,
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
                  ml: 1.5,
                  px: 1.75,
                  py: 0.875,
                  borderRadius: '10px',
                  textTransform: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  minWidth: 'auto',
                  border: `1.5px solid ${theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.12)'
                    : 'rgba(0, 0, 0, 0.12)'}`,
                  color: 'text.primary',
                  background: 'transparent',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    borderColor: 'primary.main',
                    background: alpha(theme.palette.primary.main, 0.08),
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Resume
              </Button>

              {/* Theme Toggle */}
              <IconButton
                onClick={toggleDarkMode}
                sx={{
                  ml: 1.5,
                  color: theme.palette.text.primary,
                  opacity: 0.75,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    opacity: 1,
                    background: alpha(theme.palette.primary.main, 0.08),
                    transform: 'rotate(180deg)',
                  },
                }}
              >
                {darkMode ? <LightMode sx={{ fontSize: 20 }} /> : <DarkMode sx={{ fontSize: 20 }} />}
              </IconButton>
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1.5 }}>
              <IconButton
                onClick={toggleDarkMode}
                sx={{
                  color: theme.palette.text.primary,
                  opacity: 0.75,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    opacity: 1,
                    background: alpha(theme.palette.primary.main, 0.08),
                    transform: 'rotate(180deg)',
                  },
                }}
              >
                {darkMode ? <LightMode sx={{ fontSize: 20 }} /> : <DarkMode sx={{ fontSize: 20 }} />}
              </IconButton>
              <IconButton
                onClick={() => setMobileMenuOpen(true)}
                sx={{
                  color: theme.palette.text.primary,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    background: alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: {
            width: '80%',
            maxWidth: '320px',
            background: theme.palette.mode === 'dark'
              ? 'rgba(15, 23, 42, 0.95)'
              : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px) saturate(180%)',
            WebkitBackdropFilter: 'blur(16px) saturate(180%)',
            borderLeft: `1px solid ${theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.08)'
              : 'rgba(0, 0, 0, 0.08)'}`,
          },
        }}
        sx={{
          '& .MuiDrawer-paper': {
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          },
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
                py: 2,
                px: 3,
                mx: 1,
                my: 0.5,
                borderRadius: '12px',
                borderTop: `1px solid ${theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.08)'
                  : 'rgba(0, 0, 0, 0.08)'}`,
              }}
            >
              <ListItemText
                primary="Download Resume"
                sx={{
                  '& .MuiListItemText-primary': {
                    color: theme.palette.primary.main,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                  },
                }}
              />
              <Download sx={{ ml: 1, fontSize: 20, color: theme.palette.primary.main }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Scroll to Top Button */}
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: '#fff',
          boxShadow: `0 8px 24px -8px ${alpha(theme.palette.primary.main, 0.6)}`,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: showScrollTop ? 1 : 0,
          visibility: showScrollTop ? 'visible' : 'hidden',
          transform: showScrollTop ? 'translateY(0)' : 'translateY(20px)',
          zIndex: 1000,
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: `0 12px 32px -8px ${alpha(theme.palette.primary.main, 0.8)}`,
          },
        }}
      >
        <KeyboardArrowUp />
      </IconButton>
    </>
  );
};

export default Navbar;
