import {
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Grid2,
    useTheme,
    Snackbar,
    CircularProgress,
    Alert,
    Box,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from "./FadeInSection";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import SectionTitle from './common/SectionTitle';
import { sectionContainerStyle, glassmorphismStyle, cardHoverStyles, inputStyles } from '../styles/commonStyles';

/**
 * Contact Info Card Component
 */
const ContactInfoCard = ({ icon: Icon, text, label }: { icon: typeof Email, text: string, label: string }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                p: 1.5,
                borderRadius: '10px',
                backgroundColor: theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.03)'
                    : 'rgba(0, 0, 0, 0.02)',
                border: `1px solid ${theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.06)'
                    : 'rgba(0, 0, 0, 0.06)'}`,
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.06),
                    borderColor: alpha(theme.palette.primary.main, 0.2),
                    transform: 'translateX(4px)',
                    '& .icon-box': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.15),
                        transform: 'scale(1.05)',
                    },
                    '& .icon': {
                        color: 'primary.main',
                    },
                },
            }}
        >
            <Box
                className="icon-box"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: '8px',
                    backgroundColor: alpha(theme.palette.primary.main, 0.08),
                    color: 'text.secondary',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
            >
                <Icon className="icon" sx={{ fontSize: 18 }} />
            </Box>
            <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                    variant="caption"
                    sx={{
                        color: 'text.secondary',
                        fontSize: '0.65rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        fontWeight: 600,
                        display: 'block',
                        mb: 0.1,
                        opacity: 0.7,
                    }}
                >
                    {label}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'text.primary',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {text}
                </Typography>
            </Box>
        </Box>
    );
};

/**
 * Contact Section Component
 */
const Contact = () => {
    const theme = useTheme();
    const { contact, personal } = portfolioConfig;
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const handleCloseSnackbar = () => {
        setSnackbar({ ...snackbar, open: false });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;
        setIsSubmitting(true);
        try {
            await emailjs.sendForm(
                serviceId,
                templateId,
                form.current,
                publicKey
            );
            setSnackbar({ open: true, message: 'Message sent successfully!', severity: 'success' });
            form.current.reset();
        } catch (error) {
            console.error('Error sending email:', error);
            setSnackbar({ open: true, message: 'Failed to send message. Please try again.', severity: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfos = [
        { icon: Email, text: personal.email, label: 'Email' },
        { icon: Phone, text: personal.phone, label: 'Phone' },
        { icon: LocationOn, text: personal.location, label: 'Location' }
    ];

    return (
        <Container id="contact" sx={sectionContainerStyle}>
            <FadeInSection>
                <SectionTitle title={contact.title} />
            </FadeInSection>

            <Grid2 container spacing={{ xs: 2.5, md: 4 }} columns={{ xs: 1, md: 12 }}>
                {/* Contact Info */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <FadeInSection direction="left">
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 2.5, sm: 3 },
                                height: { xs: 'auto', md: '100%' },
                                display: 'flex',
                                flexDirection: 'column',
                                ...glassmorphismStyle(theme),
                                ...cardHoverStyles,
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'primary.main',
                                    mb: 1,
                                    fontWeight: 600,
                                    fontSize: { xs: '1.2rem', sm: '1.4rem' },
                                }}
                            >
                                {contact.subtitle}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    mb: 3,
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6,
                                }}
                            >
                                Feel free to reach out through any of these channels
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    flex: 1,
                                }}
                            >
                                {contactInfos.map((info, index) => (
                                    <FadeInSection key={index} delay={index * 0.1} direction="up">
                                        <ContactInfoCard icon={info.icon} text={info.text} label={info.label} />
                                    </FadeInSection>
                                ))}
                            </Box>
                        </Paper>
                    </FadeInSection>
                </Grid2>

                {/* Contact Form */}
                <Grid2 size={{ xs: 12, md: 6 }}>
                    <FadeInSection direction="right">
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 2.5, sm: 3 },
                                height: { xs: 'auto', md: '100%' },
                                display: 'flex',
                                flexDirection: 'column',
                                ...glassmorphismStyle(theme),
                                ...cardHoverStyles,
                            }}
                        >
                            <form ref={form} onSubmit={handleSubmit}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: 'text.primary',
                                        mb: 2,
                                        fontWeight: 600,
                                        fontSize: { xs: '1.05rem', sm: '1.15rem' },
                                    }}
                                >
                                    Send a Message
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                    {contact.form.fields.map((field) => (
                                        <TextField
                                            key={field.name}
                                            name={field.name}
                                            fullWidth
                                            label={field.label}
                                            type={field.type}
                                            multiline={field.type === 'textarea'}
                                            rows={field.type === 'textarea' ? 3 : undefined}
                                            required={field.required}
                                            sx={inputStyles(theme)}
                                        />
                                    ))}

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        fullWidth
                                        disabled={isSubmitting}
                                        sx={{
                                            mt: 1,
                                            py: 1,
                                            borderRadius: '10px',
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                                            boxShadow: `0 4px 16px -8px ${alpha(theme.palette.primary.main, 0.5)}`,
                                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                            textTransform: 'none',
                                            fontSize: '0.9rem',
                                            fontWeight: 500,
                                            '&:hover': {
                                                transform: 'translateY(-2px)',
                                                boxShadow: `0 8px 24px -8px ${alpha(theme.palette.primary.main, 0.7)}`,
                                            },
                                            '&:active': {
                                                transform: 'translateY(-1px)',
                                            },
                                            '&:disabled': {
                                                background: theme.palette.text.secondary,
                                            },
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <CircularProgress size={24} sx={{ color: 'white' }} />
                                        ) : (
                                            contact.form.submitButton
                                        )}
                                    </Button>
                                </Box>
                            </form>
                        </Paper>
                    </FadeInSection>
                </Grid2>
            </Grid2>

            {/* Snackbar */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                sx={{
                    '& .MuiSnackbar-root': {
                        borderRadius: '12px',
                    },
                }}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbar.severity as 'success' | 'error'}
                    sx={{
                        width: '100%',
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        borderRadius: '12px',
                    }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Contact;
