import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Card, 
  CardContent,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(26, 26, 26, 0.9)',
  border: '2px solid #00ff41',
  borderRadius: '15px',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 0 30px #00ff41',
    transform: 'translateY(-5px)',
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#00ff41',
      borderWidth: '2px',
    },
    '&:hover fieldset': {
      borderColor: '#00e1ff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00e1ff',
      boxShadow: '0 0 15px #00ff41',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#00ff41',
    fontFamily: 'Orbitron, sans-serif',
    '&.Mui-focused': {
      color: '#00e1ff',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: '#fff',
    fontFamily: 'Cherry Cream Soda, cursive',
    fontSize: '1.1rem',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '15px 30px',
  background: 'transparent',
  border: '2px solid #00ff41',
  borderRadius: '8px',
  color: '#00ff41',
  fontFamily: 'Orbitron, sans-serif',
  fontSize: '1.2rem',
  textShadow: '0 0 5px #00ff41',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#00ff41',
    color: '#1a1a1a',
    boxShadow: '0 0 20px #00ff41',
  },
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',
  padding: '15px',
  borderRadius: '10px',
  background: 'rgba(0, 255, 65, 0.1)',
  border: '1px solid rgba(0, 255, 65, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(0, 255, 65, 0.2)',
    transform: 'translateX(10px)',
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  margin: '0 10px',
  padding: '15px',
  border: '2px solid #00ff41',
  borderRadius: '50%',
  color: '#00ff41',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#00ff41',
    color: '#1a1a1a',
    transform: 'scale(1.2)',
    boxShadow: '0 0 20px #00ff41',
  },
}));

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null); // success or error
  
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const titleRef = React.useRef(null);
  const formRef = React.useRef(null);
  const infoRef = React.useRef(null);
  
  const titleInView = useInView(titleRef, { once: true, threshold: 0.5 });
  const formInView = useInView(formRef, { once: true, threshold: 0.3 });
  const infoInView = useInView(infoRef, { once: true, threshold: 0.3 });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setEmailStatus(null);
    try {
      // Replace these with your EmailJS service, template, and user IDs
      const SERVICE_ID = 'service_sh5d0vq';
      const TEMPLATE_ID = 'your_template_id';
      const PUBLIC_KEY = 'hmctAUretzg_yzOjr';

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        PUBLIC_KEY
      );
      setEmailStatus('success');
      reset();
    } catch (error) {
      setEmailStatus('error');
    }
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'n.ildizov@gmail.com',
      href: 'mailto:n.ildizov@gmail.com'
    },

    {
      icon: <LocationOnIcon />,
      label: 'Location',
      value: 'Uzbekistan, Tashkent region, Akkurgan district',
      href: null
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#1a1a1a',
        color: '#fff',
        paddingTop: '80px',
        paddingBottom: '40px',
      }}
    >
      <Container maxWidth="lg">
        {/* Title Section */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: -50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              color: '#00ff41',
              textShadow: '0 0 15px #00ff41',
              textAlign: 'center',
              marginBottom: '20px',
              fontWeight: 'bold',
            }}
          >
            Contact Me
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Cherry Cream Soda, cursive',
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              color: '#fff',
              textShadow: '0 0 5px #00ff41',
              textAlign: 'center',
              marginBottom: '60px',
            }}
          >
            Let's create amazing projects together!
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <StyledCard>
                <CardContent sx={{ padding: '40px' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: 'Orbitron, sans-serif',
                      color: '#00ff41',
                      marginBottom: '30px',
                      textAlign: 'center',
                    }}
                  >
                    Send Message
                  </Typography>
                  
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {emailStatus === 'success' && (
                      <Typography sx={{ color: '#00ff41', mb: 2, textAlign: 'center', fontFamily: 'Orbitron, sans-serif' }}>
                        Message sent successfully!
                      </Typography>
                    )}
                    {emailStatus === 'error' && (
                      <Typography sx={{ color: 'red', mb: 2, textAlign: 'center', fontFamily: 'Orbitron, sans-serif' }}>
                        Failed to send message. Please try again later.
                      </Typography>
                    )}
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="name"
                          control={control}
                          rules={{ required: 'Name is required' }}
                          render={({ field }) => (
                            <StyledTextField
                              {...field}
                              fullWidth
                              label="Your Name"
                              variant="outlined"
                              error={!!errors.name}
                              helperText={errors.name?.message}
                            />
                          )}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <Controller
                          name="email"
                          control={control}
                          rules={{ 
                            required: 'Email is required',
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: 'Invalid email address'
                            }
                          }}
                          render={({ field }) => (
                            <StyledTextField
                              {...field}
                              fullWidth
                              label="Your Email"
                              variant="outlined"
                              error={!!errors.email}
                              helperText={errors.email?.message}
                            />
                          )}
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Controller
                          name="message"
                          control={control}
                          rules={{ required: 'Message is required' }}
                          render={({ field }) => (
                            <StyledTextField
                              {...field}
                              fullWidth
                              label="Your Message"
                              variant="outlined"
                              multiline
                              rows={6}
                              error={!!errors.message}
                              helperText={errors.message?.message}
                            />
                          )}
                        />
                      </Grid>
                      
                      <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <StyledButton
                          type="submit"
                          disabled={isSubmitting}
                          endIcon={<SendIcon />}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </StyledButton>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 50 }}
              animate={infoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <StyledCard>
                <CardContent sx={{ padding: '40px' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: 'Orbitron, sans-serif',
                      color: '#00ff41',
                      marginBottom: '30px',
                      textAlign: 'center',
                    }}
                  >
                    Get In Touch
                  </Typography>

                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={infoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <ContactInfo
                        component={info.href ? "a" : "div"}
                        href={info.href}
                        sx={{ 
                          textDecoration: 'none',
                          color: 'inherit',
                          cursor: info.href ? 'pointer' : 'default'
                        }}
                      >
                        <Box sx={{ color: '#00ff41', marginRight: '15px' }}>
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontFamily: 'Orbitron, sans-serif',
                              color: '#00ff41',
                              fontSize: '0.9rem',
                            }}
                          >
                            {info.label}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: 'Cherry Cream Soda, cursive',
                              color: '#fff',
                              fontSize: '1rem',
                            }}
                          >
                            {info.value}
                          </Typography>
                        </Box>
                      </ContactInfo>
                    </motion.div>
                  ))}

                  <Divider sx={{ margin: '30px 0', backgroundColor: '#00ff41' }} />

                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'Orbitron, sans-serif',
                      color: '#00ff41',
                      textAlign: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    Follow Me
                  </Typography>

                  <Box sx={{ textAlign: 'center' }}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={infoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <SocialButton
                        component="a"
                        href="https://www.linkedin.com/in/nodirbek-ildizov-1a5527326/"
                        target="_blank"
                        aria-label="LinkedIn"
                      >
                        <LinkedInIcon />
                      </SocialButton>
                      <SocialButton
                        component="a"
                        href="https://github.com/IldizovNodirbek"
                        target="_blank"
                        aria-label="GitHub"
                      >
                        <GitHubIcon />
                      </SocialButton>
                    </motion.div>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Cherry Cream Soda, cursive',
                      color: '#fff',
                      textAlign: 'center',
                      marginTop: '30px',
                      fontSize: '0.9rem',
                      opacity: 0.8,
                    }}
                  >
                    Available for freelance opportunities and exciting projects!
                  </Typography>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;