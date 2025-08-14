import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
// images
import dailyTask from '../../Images/dailyTask.png';
import superBlog from '../../Images/super-blog.png';
import inGame from '../../Images/inGame.png';
import weatherapp from '../../Images/weatherapp.png';
import realEstate from '../../Images/real-estate.png';
import reactEcommerce from '../../Images/react-ecommerce.png';

const projects = [
  {
    name: 'DailyTask',
    type: 'Todolist',
    description: 'A powerful task manager for daily, weekly, monthly, and special tasks. Built with React, TailwindCSS, and Redux.',
    tech: ['React', 'TailwindCSS', 'Redux'],
    image: dailyTask,
  },
  {
    name: 'InGame',
    type: 'E-Commerce',
    description: 'A modern e-commerce site for computers and accessories. Built with React, MUI, and Redux.',
    tech: ['React', 'MUI', 'Redux'],
     image: inGame,
  },

   {
    name: 'Weather App',
    type: 'Weather',
    description: 'An application that displays the weather of all countries.',
    tech: ['HTML', 'CSS', 'JavaScript'],
     image: weatherapp,
  },
  {
    name: 'React-E-Commerce',
    type: 'E-Commerce',
    description: 'A feature-rich e-commerce website built with React.',
    tech: ['React', "TailwindCSS"],
     image: reactEcommerce,
  },
  {
    name: 'Real-Estate',
    type: 'E-Commerce',
    description: 'A pre-sale home website for real estate listings and purchases.',
    tech: ['React', "TailwindCSS",],
     image: realEstate,
  },
  {
    name: 'Super Blog',
    type: 'Blog',
    description: 'A fully animated blog and article site with mini-documentaries, providing scientific and interesting information.',
    tech: ['React', 'tailwindCSS', "Framer Motion"],
     image: superBlog,
  },
];

const Projects = () => (
  <Box sx={{ minHeight: '100vh', background: '#1a1a1a', color: '#fff', py: 8 }}>
    <Typography variant="h2" sx={{ color: '#00ff41', fontFamily: 'Orbitron, sans-serif', mb: 6, textAlign: 'center', textShadow: '0 0 15px #00ff41', fontWeight: 700 }}>
      My Projects
    </Typography>
    <Grid container spacing={6} justifyContent="center">
      {projects.map((project, idx) => (
        <Grid item xs={12} key={project.name}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
          >
            <Card sx={{ background: 'rgba(26,26,26,0.95)', border: '2px solid #00ff41', borderRadius: '20px', boxShadow: '0 0 40px #00ff41', p: 4, display: 'flex', alignItems: 'center', minHeight: 420 }}>
              <Box sx={{ width: { xs: 180, sm: 300, md: 400 }, height: { xs: 180, sm: 300, md: 400 }, borderRadius: '20px', overflow: 'hidden', boxShadow: '0 0 30px #00ff41', mr: { xs: 2, sm: 4 }, flexShrink: 0, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={project.image} alt={project.name + ' screenshot'} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
              </Box>
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h3" sx={{ color: '#00ff41', fontFamily: 'Orbitron, sans-serif', mb: 2, fontWeight: 700, textShadow: '0 0 10px #00ff41' }}>
                  {project.name}
                </Typography>
                <Chip label={project.type} sx={{ mb: 2, background: '#00e1ff', color: '#1a1a1a', fontWeight: 700, fontFamily: 'Orbitron, sans-serif', fontSize: '1.1rem' }} />
                <Typography variant="body1" sx={{ fontFamily: 'Cherry Cream Soda, cursive', color: '#fff', mb: 3, fontSize: '1.2rem' }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                  {project.tech.map((tech) => (
                    <Chip key={tech} label={tech} sx={{ background: '#00ff41', color: '#1a1a1a', fontWeight: 700, fontFamily: 'Orbitron, sans-serif', fontSize: '1.1rem', px: 2, py: 1 }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
