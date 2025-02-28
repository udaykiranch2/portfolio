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
  alpha
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from "./FadeInSection";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import AnimatedBackground from './AnimatedBackground';
import SectionTitle from './common/SectionTitle';
import { sectionContainerStyle, glassmorphismStyle } from '../styles/commonStyles';

const ContactInfo = ({ icon: Icon, text }: { icon: typeof Email, text: string }) => {
  const theme = useTheme();
  return (
    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 1.5,
        borderRadius: 1,
        transition: 'all 0.3s ease',
        '&:hover': {
          background: theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.05)'
            : 'rgba(0, 0, 0, 0.02)',
          transform: 'translateX(5px)'
        }
      }}
    >
      <Icon sx={{
        color: theme.palette.primary.main,
        fontSize: { xs: 24, sm: 28 },
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)'
        }
      }} />
      <Typography 
        variant="body1" 
        sx={{ 
          color: theme.palette.text.primary,
          fontSize: { xs: '0.9rem', sm: '1rem' }
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

const Contact = () => {
  const theme = useTheme();
  const { contact, personal } = portfolioConfig;
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_jzgw4ba',
        'template_fkkvtwm',
        form.current,
        'UqXf6IuHg37nx3MR6'
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
    { icon: Email, text: personal.email },
    { icon: Phone, text: personal.phone },
    { icon: LocationOn, text: personal.location }
  ];

  return (
    <Container id="contact" sx={sectionContainerStyle}>
      <AnimatedBackground variant="mesh" opacity={0.04} />
      <FadeInSection>
        <SectionTitle title={contact.title} />
      </FadeInSection>
      <Grid2 container spacing={{ xs: 2, md: 4 }}>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <FadeInSection direction="left">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, sm: 4 },
                height: '100%',
                ...glassmorphismStyle(theme),
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(255, 255, 255, 0.05)'
                    : '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: theme.palette.primary.main,
                  mb: 4,
                  fontWeight: 500,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' }
                }}
              >
                {contact.subtitle}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {contactInfos.map((info, index) => (
                  <ContactInfo key={index} icon={info.icon} text={info.text} />
                ))}
              </Box>
            </Paper>
          </FadeInSection>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <FadeInSection direction="right">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, sm: 4 },
                ...glassmorphismStyle(theme),
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(255, 255, 255, 0.05)'
                    : '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <form ref={form} onSubmit={handleSubmit}>
                <Grid2 container spacing={2}>
                  {contact.form.fields.map((field) => (
                    <Grid2 key={field.name} size={field.type === 'textarea' ? 12 : { xs: 12, sm: 6 }}>
                      <TextField
                        name={field.name}
                        fullWidth
                        label={field.label}
                        type={field.type}
                        multiline={field.type === 'textarea'}
                        rows={field.rows}
                        required={field.required}
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            fontSize: { xs: '0.9rem', sm: '1rem' },
                            transition: 'all 0.3s ease',
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                            '&.Mui-focused fieldset': {
                              borderWidth: '2px',
                            }
                          },
                          '& .MuiInputLabel-root': {
                            fontSize: { xs: '0.9rem', sm: '1rem' }
                          }
                        }}
                      />
                    </Grid2>
                  ))}
                </Grid2>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={isSubmitting}
                  sx={{
                    mt: 3,
                    py: { xs: 1.5, sm: 2 },
                    borderRadius: 2,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    boxShadow: `0 10px 20px -10px ${alpha(theme.palette.primary.main, 0.5)}`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    textTransform: 'none',
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    fontWeight: 500,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 20px 30px -15px ${alpha(theme.palette.primary.main, 0.7)}`,
                    },
                    '&:active': {
                      transform: 'translateY(-1px)',
                    }
                  }}
                >
                  {isSubmitting ? (
                    <CircularProgress size={24} sx={{ color: 'white' }} />
                  ) : (
                    contact.form.submitButton
                  )}
                </Button>
              </form>
            </Paper>
          </FadeInSection>
        </Grid2>
      </Grid2>
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={4000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity as 'success' | 'error'} 
          sx={{ 
            width: '100%',
            fontSize: { xs: '0.9rem', sm: '1rem' }
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
