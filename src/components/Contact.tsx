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
  Box
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
    <div className="flex items-center gap-4">
      <Icon sx={{
        color: theme.palette.primary.main,
        fontSize: 28
      }} />
      <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
        {text}
      </Typography>
    </div>
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
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <FadeInSection>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                ...glassmorphismStyle(theme),
                transition: 'transform 0.2s, box-shadow 0.3s ease-in-out',
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
                  fontWeight: 500
                }}
              >
                {contact.subtitle}
              </Typography>
              <Box className="space-y-6">
                {contactInfos.map((info, index) => (
                  <ContactInfo key={index} icon={info.icon} text={info.text} />
                ))}
              </Box>
            </Paper>
          </FadeInSection>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <FadeInSection>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                ...glassmorphismStyle(theme),
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(255, 255, 255, 0.05)'
                    : '0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                {contact.form.fields.map((field) => (
                  <TextField
                    key={field.name}
                    name={field.name}
                    fullWidth
                    label={field.label}
                    type={field.type}
                    multiline={field.type === 'textarea'}
                    rows={field.rows}
                    required={field.required}
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover fieldset': {
                          borderColor: theme.palette.primary.main,
                        }
                      }
                    }}
                  />
                ))}
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  disabled={isSubmitting}
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                    transition: 'transform 0.2s ease-in-out',
                    textTransform: 'none',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    }
                  }}
                >
                  {isSubmitting ? <CircularProgress size={24} sx={{ color: 'white' }} /> : contact.form.submitButton}
                </Button>
              </form>
            </Paper>
          </FadeInSection>
        </Grid2>
      </Grid2>
      <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity as 'success' | 'error'} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;
