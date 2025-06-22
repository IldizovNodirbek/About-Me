import React, { useRef } from 'react'
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
} from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

const Introduction = () => {
  const sections = [
    {
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      title: "Hello, I'm Nodirbek, a Frontend Junior Developer",
      content: null,
      isTitle: true
    },
    {
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
      title: null,
      content: "I was born on January 14, 2004, in Piskent district of Tashkent region.",
      isTitle: false
    },
    {
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
      title: null,
      content: "I joined the Astrum IT Academy in 2023 to study Frontend Development. After 2 years of education, I earned a Frontend certificate from Astrum IT.",
      isTitle: false
    }
  ]

  const SectionComponent = ({ section, index }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, threshold: 0.3 })

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

    const imageVariants = {
      hidden: { opacity: 0, x: index % 2 === 0 ? 100 : -100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" }
      }
    }

    const textVariants = {
      hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut" }
      }
    }

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={6} order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
            <motion.div variants={imageVariants}>
              <Card
                sx={{
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  border: '3px solid #00ff41',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, transparent, rgba(0, 255, 65, 0.1), transparent)',
                    animation: 'shimmer 3s infinite ease-in-out',
                    zIndex: 1,
                  }
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 300, sm: 350, md: 400 },
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={section.image}
                    alt={`Section ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)'
                    }}
                  />
                </Box>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} order={{ xs: 2, md: index % 2 === 0 ? 2 : 1 }}>
            <motion.div variants={textVariants}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                {section.isTitle ? (
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"Orbitron", sans-serif',
                      fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                      fontWeight: 700,
                      color: '#fff',
                      lineHeight: 1.3,
                      '& span': {
                        color: '#00ff41',
                        textShadow: '0 0 10px #00ff41',
                      }
                    }}
                  >
                    Hello, I'm <span>Nodirbek</span>, a Frontend Junior Developer
                  </Typography>
                ) : (
                  <Card
                    sx={{
                      backgroundColor: 'rgba(26, 26, 26, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0, 255, 65, 0.3)',
                      borderRadius: '15px',
                      p: 2,
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: '"Cherry Cream Soda", cursive',
                          fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                          color: '#fff',
                          lineHeight: 1.6,
                          '& .highlight': {
                            fontFamily: '"Orbitron", sans-serif',
                            color: '#00ff41',
                            fontWeight: 'bold',
                            textShadow: '0 0 5px #00ff41',
                          }
                        }}
                      >
                        {section.content.includes('Astrum IT Academy') ? (
                          <>
                            I joined the <span className="highlight">Astrum IT Academy</span> in
                            2023 to study Frontend Development. After 2 years of education, I
                            earned a Frontend certificate from Astrum IT.
                          </>
                        ) : (
                          section.content
                        )}
                      </Typography>
                    </CardContent>
                  </Card>
                )}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    )
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Orbitron", sans-serif',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            color: '#00ff41',
            textShadow: '0 0 15px #00ff41',
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
          }}
        >
          INTRODUCTION
        </Typography>
      </motion.div>

      {sections.map((section, index) => (
        <SectionComponent key={index} section={section} index={index} />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ textAlign: 'center', marginTop: '3rem' }}
      >
        <Button
          component={Link}
          to="/"
          variant="outlined"
          size="large"
          startIcon={<ArrowBack />}
          sx={{
            borderColor: '#00ff41',
            color: '#00ff41',
            fontFamily: '"Orbitron", sans-serif',
            fontWeight: 600,
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            '&:hover': {
              backgroundColor: '#00ff41',
              color: '#000',
              boxShadow: '0 0 20px #00ff41',
            }
          }}
        >
          Go to Main Page
        </Button>
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </Container>
  )
}

export default Introduction