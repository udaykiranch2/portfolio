import { Container, Typography, Grid2, Paper, useTheme, Theme, Box } from "@mui/material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from './FadeInSection';
import SectionTitle from './common/SectionTitle';
import { sectionContainerStyle, glassmorphismStyle, cardHoverStyles } from '../styles/commonStyles';
import { alpha } from '@mui/material/styles';

/**
 * Get icon color based on theme and color name
 */
const getIconColor = (theme: Theme, color: string) => {
    const colorMap = {
        primary: theme.palette.primary.main,
        secondary: theme.palette.secondary.main,
        warning: theme.palette.warning.main,
        info: theme.palette.info.main,
    };
    return colorMap[color as keyof typeof colorMap] || theme.palette.text.primary;
};

/**
 * Skill Card Component
 */
const SkillCard = ({ category, index, theme }: { category: any, index: number, theme: Theme }) => {
    const Icon = category.icon;

    return (
        <FadeInSection delay={index * 0.15} direction={index % 2 === 0 ? 'up' : 'up'}>
            <Paper
                sx={{
                    p: { xs: 2.5, sm: 3, md: 3.5 },
                    height: '100%',
                    ...glassmorphismStyle(theme),
                    ...cardHoverStyles,
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg,
              ${getIconColor(theme, category.iconColor)}80,
              ${getIconColor(theme, category.iconColor)})`,
                        opacity: 0.8,
                    },
                }}
                elevation={0}
            >
                {/* Icon with glow */}
                <Box
                    sx={{
                        position: 'relative',
                        mb: { xs: 2, sm: 2.5, md: 3 },
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '70px',
                            height: '70px',
                            background: `radial-gradient(circle, ${getIconColor(theme, category.iconColor)}25, transparent)`,
                            borderRadius: '50%',
                            transition: 'all 0.4s ease',
                        },
                    }}
                >
                    <Icon
                        sx={{
                            fontSize: { xs: '2.5rem', sm: '2.75rem', md: '3rem' },
                            color: getIconColor(theme, category.iconColor),
                            position: 'relative',
                            zIndex: 1,
                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                            '&:hover': {
                                transform: 'scale(1.1)',
                            },
                        }}
                    />
                </Box>

                {/* Category Title */}
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        letterSpacing: '0.5px',
                        fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                        mb: { xs: 2, sm: 2.5, md: 3 },
                    }}
                >
                    {category.category}
                </Typography>

                {/* Skills List */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: { xs: 0.75, sm: 1 },
                        width: '100%',
                    }}
                >
                    {category.skills.map((skill: string, skillIndex: number) => (
                        <Box
                            key={skill}
                            sx={{
                                padding: { xs: '8px 14px', sm: '10px 16px' },
                                borderRadius: '10px',
                                backgroundColor: theme.palette.mode === 'dark'
                                    ? 'rgba(255, 255, 255, 0.04)'
                                    : 'rgba(0, 0, 0, 0.03)',
                                border: `1px solid ${theme.palette.mode === 'dark'
                                    ? 'rgba(255, 255, 255, 0.06)'
                                    : 'rgba(0, 0, 0, 0.05)'}`,
                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                animation: `fadeInUp 0.5s ease-out ${skillIndex * 0.08}s both`,
                                '@keyframes fadeInUp': {
                                    from: {
                                        opacity: 0,
                                        transform: 'translateY(10px)',
                                    },
                                    to: {
                                        opacity: 1,
                                        transform: 'translateY(0)',
                                    },
                                },
                                '&:hover': {
                                    backgroundColor: alpha(getIconColor(theme, category.iconColor), 0.1),
                                    borderColor: getIconColor(theme, category.iconColor),
                                    transform: 'translateX(6px)',
                                },
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
                                    fontWeight: 500,
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                {skill}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Paper>
        </FadeInSection>
    );
};

/**
 * Skills Section Component
 * Clean grid of skill categories with glassmorphism
 */
const Skills = () => {
    const theme = useTheme();
    const { skills } = portfolioConfig;

    return (
        <Container id="skills" sx={sectionContainerStyle}>
            <FadeInSection>
                <SectionTitle title={skills.title} />
            </FadeInSection>

            <Grid2 container spacing={{ xs: 2, sm: 3, md: 3.5 }}>
                {skills.categories.map((category, index) => (
                    <Grid2
                        size={{ xs: 12, sm: 6, lg: 3 }}
                        key={category.category}
                    >
                        <SkillCard category={category} index={index} theme={theme} />
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    );
};

export default Skills;
