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
    if(!form.current) return;
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
    <Container id="contact" maxWidth="lg" className="py-16">
      <FadeInSection>
        <Typography 
          variant="h4" 
          sx={{
          textAlign: 'center',
          mb: 4,
          color: theme.palette.text.primary
        }}
      >
          {contact.title}
        </Typography>
      </FadeInSection>
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, md: 5 }}>
          <FadeInSection>
            <Paper 
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                bgcolor: theme.palette.background.paper,
                borderRadius: 2,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
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
              elevation={3}
              sx={{
                p: 4,
                bgcolor: theme.palette.background.paper,
                borderRadius: 2
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
