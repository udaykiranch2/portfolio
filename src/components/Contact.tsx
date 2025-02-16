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
  Alert
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import { portfolioConfig } from '../config/portfolio.config';
import FadeInSection from "./FadeInSection";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import AnimatedBackground from './AnimatedBackground';

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
    // Add form submission logic here
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

  return (
    <Container id="contact"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        py: { xs: 12, md: 16 },
        scrollMarginTop: '80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mb: 8,
      }}>
      <AnimatedBackground
        variant="mesh"
        opacity={0.04}
      />
      <FadeInSection>
        <Typography
          variant="h4"
          sx={(theme: any) => ({
            textAlign: 'center',
            color: 'primary.main',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: theme.spacing(0.1),
            position: 'relative',
            // display: 'inline-block',
            animation: 'slideIn 1s ease-out',
            '@keyframes slideIn': {
              from: { opacity: 0, transform: 'translateX(-20px)' },
              to: { opacity: 1, transform: 'translateX(0)' }
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: theme.spacing(-1),
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2em',
              height: '2px',
              bgcolor: 'primary.main',
              animation: 'widthGrow 0.5s ease-out 0.5s forwards',
              '@keyframes widthGrow': {
                from: { width: 0 },
                to: { width: '4em' }
              }
            },
            mb: 3
          })}
        >
          {contact.title}
        </Typography>
      </FadeInSection>
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <FadeInSection>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: '100%',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.6))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(255, 255, 255, 0.7)'}`,
                borderRadius: '16px',
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
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Email sx={{
                    color: theme.palette.primary.main,
                    fontSize: 28
                  }} />
                  <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                    {personal.email}
                  </Typography>
                </div>
                <div className="flex items-center gap-4">
                  <Phone sx={{
                    color: theme.palette.primary.main,
                    fontSize: 28
                  }} />
                  <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                    {personal.phone}
                  </Typography>
                </div>
                <div className="flex items-center gap-4">
                  <LocationOn sx={{
                    color: theme.palette.primary.main,
                    fontSize: 28
                  }} />
                  <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
                    {personal.location}
                  </Typography>
                </div>
              </div>
            </Paper>
          </FadeInSection>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 7 }}>
          <FadeInSection>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.6))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(255, 255, 255, 0.7)'}`,
                borderRadius: '16px',
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
