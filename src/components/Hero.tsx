import { Box, Button, Container, Grid2, IconButton, Typography, useTheme } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';
import Profile from './Profile';
import { alpha } from '@mui/material/styles';
import FadeInSection from './FadeInSection';
import { buttonStyles } from '../styles/commonStyles';

/**
 * Hero Section Component
 * Clean, minimalist design with subtle animations
 * Focus on typography and spacing
 */
const Hero = () => {
    const { hero, personal } = portfolioConfig;
    const theme = useTheme();

    return (
        <Container
            id="home"
            sx={{
                minHeight: '100vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                scrollMarginTop: { xs: '64px', md: '80px' },
                py: { xs: 6, md: 8 },
            }}
        >
            {/* Subtle ambient background glow */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: { xs: '200px', md: '350px' },
                    height: { xs: '200px', md: '350px' },
                    background: `radial-gradient(circle, ${alpha(theme.palette.primary.main, 0.15)} 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    borderRadius: '50%',
                    animation: 'pulse 8s ease-in-out infinite',
                    '@keyframes pulse': {
                        '0%, 100%': { transform: 'scale(1)', opacity: 0.5 },
                        '50%': { transform: 'scale(1.1)', opacity: 0.7 },
                    },
                    zIndex: 0,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '5%',
                    width: { xs: '180px', md: '300px' },
                    height: { xs: '180px', md: '300px' },
                    background: `radial-gradient(circle, ${alpha(theme.palette.secondary.main, 0.12)} 0%, transparent 70%)`,
                    filter: 'blur(60px)',
                    borderRadius: '50%',
                    animation: 'pulse 8s ease-in-out infinite alternate',
                    zIndex: 0,
                }}
            />

            <FadeInSection>
                <Grid2
                    container
                    spacing={{ xs: 4, md: 8 }}
                    alignItems="center"
                    sx={{ position: 'relative', zIndex: 1 }}
                >
                    {/* Left Column - Text Content */}
                    <Grid2
                        size={{ xs: 12, md: 7 }}
                        order={{ xs: 2, md: 1 }}
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: { xs: 'center', md: 'flex-start' },
                            }}
                        >
                            {/* Greeting */}
                            <Typography
                                variant="h6"
                                sx={{
                                    color: 'primary.main',
                                    fontWeight: 500,
                                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
                                    mb: { xs: 1, md: 1.5 },
                                    letterSpacing: '0.5px',
                                    textTransform: 'uppercase',
                                    opacity: 0.9,
                                }}
                            >
                                {hero.greeting}
                            </Typography>

                            {/* Name with Gradient */}
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                                    fontWeight: 800,
                                    letterSpacing: { xs: '-0.5px', md: '-1px' },
                                    lineHeight: 1.15,
                                    mb: { xs: 1.5, md: 2 },
                                    background: `linear-gradient(135deg,
                                        ${theme.palette.primary.main} 0%,
                                        ${theme.palette.secondary.main} 50%,
                                        ${theme.palette.primary.main} 100%)`,
                                    backgroundSize: '200% auto',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    animation: 'shimmer 10s linear infinite',
                                }}
                            >
                                {personal.name}
                            </Typography>

                            {/* Title */}
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
                                    fontWeight: 500,
                                    color: 'text.secondary',
                                    mb: { xs: 2, md: 2.5 },
                                    lineHeight: 1.4,
                                    maxWidth: '600px',
                                }}
                            >
                                {personal.title}
                            </Typography>

                            {/* Tagline */}
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                                    color: 'text.secondary',
                                    mb: { xs: 4, md: 5 },
                                    lineHeight: 1.8,
                                    maxWidth: '580px',
                                    opacity: 0.85,
                                }}
                            >
                                {hero.tagline}
                            </Typography>

                            {/* CTA Buttons */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                    flexWrap: 'wrap',
                                    width: '100%',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    href="#contact"
                                    sx={{
                                        ...buttonStyles(theme, 'primary'),
                                        px: { xs: 2, md: 3 },
                                        py: { xs: 1.25, md: 1.5 },
                                    }}
                                >
                                    {hero.cta.primary}
                                </Button>

                                <Button
                                    variant="outlined"
                                    size="large"
                                    href="#projects"
                                    sx={{
                                        ...buttonStyles(theme, 'outline'),
                                        px: { xs: 2, md: 3 },
                                        py: { xs: 1.25, md: 1.5 },
                                    }}
                                >
                                    {hero.cta.secondary}
                                </Button>
                            </Box>

                            {/* Social Links */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 1.5,
                                    mt: { xs: 4, md: 5 },
                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                }}
                            >
                                {hero.socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <IconButton
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                color: 'text.secondary',
                                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                                width: 42,
                                                height: 42,
                                                '&:hover': {
                                                    color: 'primary.main',
                                                    background: alpha(theme.palette.primary.main, 0.08),
                                                    transform: 'translateY(-4px)',
                                                },
                                            }}
                                        >
                                            <Icon sx={{ fontSize: 22 }} />
                                        </IconButton>
                                    );
                                })}
                            </Box>
                        </Box>
                    </Grid2>

                    {/* Right Column - Profile Image */}
                    <Grid2
                        size={{ xs: 12, md: 5 }}
                        order={{ xs: 1, md: 2 }}
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-end' },
                            alignItems: 'center',
                        }}
                    >
                        <Profile />
                    </Grid2>
                </Grid2>
            </FadeInSection>
        </Container>
    );
};

export default Hero;
