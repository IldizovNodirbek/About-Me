import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { LinkedIn, GitHub, KeyboardArrowDown } from '@mui/icons-material'
import { motion } from 'framer-motion'

const Home = () => {
  const [typewriterText, setTypewriterText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const texts = ['DEVELOPER', '3D MAKER', 'PROGRAMMER', 'CONTENT MAKER']

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const currentText = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setTypewriterText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setTypewriterText(currentText.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setCurrentIndex((currentIndex + 1) % texts.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, currentIndex, texts])

  const handleSocialClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleSocialClose = () => {
    setAnchorEl(null)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  }

  return (
    <Container maxWidth="xl" sx={{ minHeight: 'calc(100vh - 64px)', py: 4 }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid container spacing={4} alignItems="center" sx={{ minHeight: 'calc(100vh - 120px)' }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: isMobile ? 'center' : 'left' }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: '"Cherry Cream Soda", cursive',
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                    mb: 2,
                    '& span': {
                      color: '#00ff41',
                      textShadow: '0 0 10px #00ff41',
                    }
                  }}
                >
                  Hey! I'm <span>Nodirbek</span>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: '"Orbitron", sans-serif',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                    mb: 3,
                    color: '#00ff41',
                    minHeight: '60px',
                  }}
                >
                  I'm a{' '}
                  <span style={{ 
                    borderRight: '2px solid #00ff41',
                    animation: 'blink 0.7s infinite'
                  }}>
                    {typewriterText}
                  </span>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.2rem' },
                    mb: 4,
                    lineHeight: 1.6,
                    maxWidth: '600px',
                  }}
                >
                  Passionate frontend developer with expertise in modern web technologies. 
                  I create beautiful, responsive, and user-friendly web applications that 
                  deliver exceptional user experiences.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={handleSocialClick}
                    endIcon={<KeyboardArrowDown />}
                    sx={{
                      borderColor: '#00ff41',
                      color: '#00ff41',
                      fontFamily: '"Orbitron", sans-serif',
                      fontWeight: 600,
                      px: 3,
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: '#00ff41',
                        color: '#000',
                        boxShadow: '0 0 20px #00ff41',
                      }
                    }}
                  >
                    Connect with me
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleSocialClose}
                    PaperProps={{
                      sx: {
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #00ff41',
                        borderRadius: 2,
                        boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
                      }
                    }}
                  >
                    <MenuItem 
                      component="a" 
                      href="https://www.linkedin.com/in/nodirbek-ildizov-1a5527326/" 
                      target="_blank"
                      onClick={handleSocialClose}
                      sx={{ color: '#fff', '&:hover': { backgroundColor: 'rgba(0, 255, 65, 0.1)' } }}
                    >
                      <LinkedIn sx={{ mr: 1, color: '#00ff41' }} />
                      LinkedIn
                    </MenuItem>
                    <MenuItem 
                      component="a" 
                      href="https://github.com/IldizovNodirbek" 
                      target="_blank"
                      onClick={handleSocialClose}
                      sx={{ color: '#fff', '&:hover': { backgroundColor: 'rgba(0, 255, 65, 0.1)' } }}
                    >
                      <GitHub sx={{ mr: 1, color: '#00ff41' }} />
                      GitHub
                    </MenuItem>
                  </Menu>
                </Box>
              </motion.div>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              variants={imageVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                sx={{
                  width: { xs: 300, sm: 350, md: 400 },
                  height: { xs: 300, sm: 350, md: 400 },
                  borderRadius: '15px',
                  overflow: 'hidden',
                  mx: 'auto',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, transparent, rgba(0, 255, 65, 0.2), transparent)',
                    borderRadius: '15px',
                    animation: 'glow 2s infinite ease-in-out',
                    zIndex: 1,
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: -2,
                    left: -2,
                    right: -2,
                    bottom: -2,
                    background: 'linear-gradient(45deg, #00ff41, #00e1ff, #00ff41)',
                    borderRadius: '17px',
                    zIndex: -1,
                    animation: 'borderGlow 3s infinite ease-in-out',
                  }
                }}
              >
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Nodirbek Ildizov"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '15px',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>

      <style jsx>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes borderGlow {
          0%, 100% { 
            background: linear-gradient(45deg, #00ff41, #00e1ff, #00ff41);
            filter: blur(2px);
          }
          50% { 
            background: linear-gradient(45deg, #00e1ff, #00ff41, #00e1ff);
            filter: blur(4px);
          }
        }
      `}</style>
    </Container>
  )
}

export default Home