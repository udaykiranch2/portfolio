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
        p: 2,
        borderRadius: 2,
        backgroundColor: theme.palette.mode === 'dark'
          ? alpha(theme.palette.primary.main, 0.05)
          : alpha(theme.palette.primary.main, 0.03),
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: 'translateX(0)',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateX(8px)',
          backgroundColor: theme.palette.mode === 'dark'
            ? alpha(theme.palette.primary.main, 0.1)
            : alpha(theme.palette.primary.main, 0.08),
          '& .icon': {
            transform: 'scale(1.1) rotate(5deg)',
            color: theme.palette.primary.main,
          },
          '& .text': {
            color: theme.palette.primary.main,
          }
        }
      }}
    >
      <Icon className="icon" sx={{
        color: theme.palette.mode === 'dark'
          ? alpha(theme.palette.primary.main, 0.7)
          : theme.palette.primary.main,
        fontSize: { xs: 24, sm: 28 },
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }} />
      <Typography
        className="text"
        variant="body1"
        sx={{
          color: theme.palette.text.primary,
          fontSize: { xs: '0.9rem', sm: '1rem' },
          fontWeight: 500,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
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
        <Grid2 size={{ xs: 12, md: 6 }}>
          <FadeInSection direction="left">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2.5, sm: 4 },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
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
                  mb: 3,
                  fontWeight: 600,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' },
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 3,
                    borderRadius: 1.5,
                    backgroundColor: theme.palette.primary.main,
                  }
                }}
              >
                {contact.subtitle}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  mt: 2,
                  flex: 1,
                  '& > *': {
                    animation: 'slideIn 0.5s ease-out forwards',
                  },
                  '@keyframes slideIn': {
                    from: {
                      opacity: 0,
                      transform: 'translateX(-20px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                {contactInfos.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <ContactInfo icon={info.icon} text={info.text} />
                  </Box>
                ))}
              </Box>
            </Paper>
          </FadeInSection>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <FadeInSection direction="right">
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, sm: 3 },
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
              <form ref={form} onSubmit={handleSubmit}>
                <Grid2 container spacing={2}>
                  {contact.form.fields.map((field) => (
                    <Grid2 key={field.name} size={field.type === 'textarea' ? 12 : { lg: 12, xs: 12, md: 12 }}>
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
                            fontSize: { xs: '0.875rem', sm: '0.95rem' },
                            transition: 'all 0.3s ease',
                            '& fieldset': {
                              borderWidth: '1px',
                            },
                            '&:hover fieldset': {
                              borderColor: theme.palette.primary.main,
                            },
                            '&.Mui-focused fieldset': {
                              borderWidth: '1.5px',
                            }
                          },
                          '& .MuiInputLabel-root': {
                            fontSize: { xs: '0.875rem', sm: '0.95rem' }
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
                    mt: 2,
                    py: 1,
                    borderRadius: 2,
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                    boxShadow: `0 8px 16px -8px ${alpha(theme.palette.primary.main, 0.5)}`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    textTransform: 'none',
                    fontSize: { xs: '0.875rem', sm: '0.95rem' },
                    fontWeight: 500,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 16px 24px -12px ${alpha(theme.palette.primary.main, 0.7)}`,
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
