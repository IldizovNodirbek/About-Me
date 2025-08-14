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
import personal from "../../Images/personal.jpg";
import astrum from "../../Images/astrum.jpg";

const Introduction = () => {
  const sections = [
    {
      image: personal,
      title: "Hello, I'm Nodirbek Ildizov, a passionate Junior Frontend Developer from Uzbekistan.",
      content: "I love building beautiful, interactive web applications and constantly learning new technologies. My journey in tech started with curiosity and has grown into a true passion for coding and design.",
      isTitle: true
    },
    {
      image: astrum,
      title: null,
      content: "I was born on January 14, 2004 in Piskent district of Tashkent region. Growing up in a supportive family, I developed a strong work ethic and a love for problem solving. I was always interested in today's technology, applications, and how they work. I myself use social networks and various sites. Their visuality, color, and strong design led me to web development",
      isTitle: false
    },
    {
      image: astrum,
      title: null,
      content: "In 2023, I joined Astrum IT Academy, one of the leading tech academies in Uzbekistan. There, I immersed myself in modern frontend technologies, collaborating with talented peers and mentors. After two years of intensive study, I earned my Frontend Developer certificate, mastering React, JavaScript, CSS, and more.",
      isTitle: false
    },
    {
      image: null,
      title: null,
      content: "Beyond coding, I enjoy reading tech blogs, participating in hackathons, and sharing knowledge with others. I believe in continuous growth and am always eager to take on new challenges. My goal is to contribute to innovative projects and become a top-tier developer.",
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
          {section.image && (
            <Grid item xs={12} md={6} order={{ xs: 1, md: index % 2 === 0 ? 1 : 2 }}>
              <motion.div variants={imageVariants}>
                <Card
                  sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    border: '3px solid #00ff41',
                    borderRadius: index === 0 ? '50%' : '15px',
                    overflow: 'hidden',
                    position: 'relative',
                    width: index === 0 ? { xs: 220, sm: 260, md: 320 } : '100%',
                    height: index === 0 ? { xs: 220, sm: 260, md: 320 } : { xs: 300, sm: 350, md: 400 },
                    mx: index === 0 ? 'auto' : undefined,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
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
                        borderRadius: index === 0 ? '50%' : '15px',
                        border: index === 0 ? '5px solid #00ff41' : undefined,
                        boxShadow: index === 0 ? '0 0 40px 5px #00ff41' : undefined,
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={e => { e.target.style.transform = 'scale(1.07)' }}
                      onMouseLeave={e => { e.target.style.transform = 'scale(1)' }}
                    />
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          )}
          <Grid item xs={12} md={section.image ? 6 : 12} order={{ xs: 2, md: section.image ? (index % 2 === 0 ? 2 : 1) : 1 }}>
            <motion.div variants={textVariants}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                {section.isTitle ? (
                  <>
                    <Typography
                      variant="h3"
                      sx={{
                        fontFamily: '"Orbitron", sans-serif',
                        fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                        fontWeight: 700,
                        color: '#fff',
                        lineHeight: 1.3,
                        mb: 2,
                        '& span': {
                          color: '#00ff41',
                          textShadow: '0 0 10px #00ff41',
                        }
                      }}
                    >
                      Hello, I'm <span>Nodirbek Ildizov</span>, a passionate Junior Frontend Developer from Uzbekistan.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: '"Cherry Cream Soda", cursive',
                        fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                        color: '#fff',
                        lineHeight: 1.6,
                        mb: 2,
                      }}
                    >
                      I love building beautiful, interactive web applications and constantly learning new technologies. My journey in tech started with curiosity and has grown into a true passion for coding and design.
                    </Typography>
                  </>
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
                        {section.content}
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