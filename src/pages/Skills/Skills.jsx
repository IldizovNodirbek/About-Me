import React, { useState } from 'react';
import { 
  Box, 
  Button,
  Container, 
  Typography, 
  Card, 
  CardContent, 
  IconButton, 
  Collapse, 
  Grid,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

import atom from '../../Images/atom.png';
import html from '../../Images/html.png';
import css from '../../Images/css-3.png';
import js from '../../Images/js.png';
import tailwind from '../../Images/tailwindcss.png';
import mui from '../../Images/materialUI.png';
import reduxLogo from '../../Images/redux.png';
import github from '../../Images/github.png';
import git from '../../Images/git.png';
import framer from '../../Images/framer.png';
import reactRouter from '../../Images/react-router.svg';
import reactHookForm from '../../Images/react-hook-form.png';
import vercel from '../../Images/vercel.png';
import netlify from '../../Images/netlify.png';

// backend skills images
import nodejs from '../../Images/nodejs.png';
import express from '../../Images/express.png';
import mongodb from '../../Images/mongodb.png';
import postgresql from '../../Images/postgresql.png';
import docker from '../../Images/docker.png';
import jwt from '../../Images/jwt.png';
import restapi from '../../Images/restapi.png';

const StyledCard = styled(Card)(({ theme, techcolor }) => ({
  background: 'rgba(26, 26, 26, 0.9)',
  border: `3px solid ${techcolor || '#00ff41'}`,
  borderRadius: '15px',
  minHeight: '450px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  transition: 'all 0.3s ease',
  boxShadow: `0 0 30px ${techcolor || '#00ff41'}`,
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: `0 0 40px ${techcolor || '#00ff41'}, 0 0 60px ${techcolor || '#00ff41'}70`,
  },
}));

const SkillIcon = styled(Box)(({ theme }) => ({
  width: '300px',
  height: '300px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down('md')]: {
    width: '250px',
    height: '250px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '200px',
    height: '200px',
  },
}));

const ExpandButton = styled(IconButton)(({ theme, expanded, techcolor }) => ({
  color: techcolor || '#00ff41',
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: `scale(1.2) ${expanded ? 'rotate(180deg)' : 'rotate(0deg)'}`,
  },
}));

const DropdownContent = styled(Collapse)(({ theme, techcolor }) => ({
  width: '100%',
  maxWidth: '300px',
  '& .MuiCollapse-wrapper': {
    '& .MuiCollapse-wrapperInner': {
      backgroundColor: 'rgba(26, 26, 26, 0.95)',
      border: `2px solid ${techcolor || '#00ff41'}`,
      borderRadius: '10px',
      padding: '15px',
      marginTop: '10px',
    },
  },
}));

const LearningSection = styled(Box)(({ theme }) => ({
  marginTop: '60px',
  padding: '40px 20px',
  textAlign: 'center',
}));

const LearningTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Orbitron, sans-serif',
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  color: '#00ff41',
  textShadow: '0 0 15px #00ff41',
  marginBottom: '40px',
  fontWeight: 'bold',
}));

const LearningChip = styled(Chip)(({ theme, index }) => ({
  margin: '10px',
  padding: '15px 20px',
  fontSize: '1.1rem',
  fontFamily: 'Cherry Cream Soda, cursive',
  backgroundColor: 'transparent',
  border: '2px solid #ff6b35',
  color: '#ff6b35',
  textShadow: '0 0 5px #ff6b35',
  boxShadow: '0 0 15px #ff6b35',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#ff6b35',
    color: '#1a1a1a',
    transform: 'scale(1.1)',
    boxShadow: '0 0 25px #ff6b35',
  },
  animation: `pulse 2s infinite ${index * 0.2}s`,
  '@keyframes pulse': {
    '0%': {
      boxShadow: '0 0 15px #ff6b35',
    },
    '50%': {
      boxShadow: '0 0 25px #ff6b35, 0 0 35px #ff6b35',
    },
    '100%': {
      boxShadow: '0 0 15px #ff6b35',
    },
  },
}));

const skillsGroups = [
  {
    group: 'Web Basic',
    skills: [
      {
        name: 'HTML', image: html, color: '#e34c26', description: 'I can create static web pages with HTML, use semantic tags and build a structure optimized for SEO. At the same time, I make effective use of HTML5 for proper page structure and improved user experience.'
      },
      {
        name: 'CSS', image: css, color: '#1572b6', description: 'I create responsive designs with CSS, Flexbox, Grid and I can build modern interfaces using animations. Using CSS3 properties, gradients, various transformations and media queries I prepare designs suitable for devices.'
      },
      {
        name: 'JavaScript', image: js, color: '#f7df1e', description: 'I add dynamic functions with JavaScript, DOM manipulation and working with asynchronous requests (AJAX). I know ES6+ features, I write modern code using async/await.'
      },
    ]
  },
  {
    group: 'Web Styling',
    skills: [
      {
        name: 'Tailwind CSS', image: tailwind, color: '#00e1ff', description: 'I can build fast and flexible designs with Tailwind CSS. Utility-first approach, responsive and modern interfaces.'
      },
      {
        name: 'Material UI', image: mui, color: '#007bff', description: 'I build fast and beautiful interfaces using Material UI, based on Material Design principles.'
      },
    ]
  },
  {
    group: 'Web Animation',
    skills: [
      {
        name: 'Framer Motion', image: framer, color: '#00ff41', description: 'I create smooth and professional animations using Framer Motion.'
      },
    ]
  },
  {
    group: 'React Ecosystem',
    skills: [
      {
        name: 'React', image: atom, color: '#00d8ff', description: 'Dynamic and component-based web applications with React. Efficient and fast using virtual DOM.'
      },
      {
        name: 'Redux', image: reduxLogo, color: '#764abc', description: 'I manage state in complex React projects with Redux.'
      },
      {
        name: 'React Hook Form', image: reactHookForm, color: '#ec5990', description: 'I build performant and flexible forms with React Hook Form.'
      },
      {
        name: 'React Router', image: reactRouter, color: '#ca4245', description: 'I implement client-side routing in React applications using React Router.'
      },
    ]
  },
  {
    group: 'Deployment',
    skills: [
      {
        name: 'Vercel', image: vercel, color: '#000000', description: 'I deploy and host modern web applications using Vercel.'
      },
      {
        name: 'Netlify', image: netlify, color: '#00c7b7', description: 'I deploy static sites and JAMstack applications using Netlify.'
      },
    ]
  },
  {
    group: 'Version Control',
    skills: [
      {
        name: 'Git', image: git, color: '#f05032', description: 'I use Git for version control and collaborative development.'
      },
      {
        name: 'GitHub', image: github, color: '#333333', description: 'I use GitHub for code hosting, collaboration, and project management.'
      },
    ]
  },
];

const learningTechnologies = [
  'Node.js',
  'Firebase',
  'TypeScript',
  'Shadcn/ui'
];

const SkillCard = ({ skill, index }) => {
  const [expanded, setExpanded] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.2 }}
    >
      <StyledCard techcolor={skill.color}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <SkillIcon>
            <img src={skill.image} alt={skill.name} />
          </SkillIcon>
          
          <ExpandButton
            expanded={expanded}
            onClick={handleExpandClick}
            techcolor={skill.color}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon sx={{ fontSize: '2rem' }} />
          </ExpandButton>

          <DropdownContent in={expanded} techcolor={skill.color}>
            <Typography
              variant="body1"
              sx={{
                color: '#fff',
                textAlign: 'center',
                fontFamily: 'Cherry Cream Soda, cursive',
                fontSize: '1rem',
                lineHeight: 1.6,
              }}
            >
              {skill.description}
            </Typography>
          </DropdownContent>
        </CardContent>
      </StyledCard>
    </motion.div>
  );
};

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const [showBackend, setShowBackend] = useState(false);

  const backendSkills = [
    { name: 'Node.js', image: nodejs, color: '#339933' },
    { name: 'Express.js', image: express, color: '#000000' },
    { name: 'MongoDB', image: mongodb, color: '#47A248' },
    { name: 'PostgreSQL', image: postgresql, color: '#336791' },
    { name: 'Docker', image: docker, color: '#2496ED' },
    { name: 'JWT', image: jwt, color: '#EA6F27' },
    { name: 'REST API', image: restapi, color: '#00ff41' },
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
      <Container maxWidth="xl">
        {/* Grouped Skills Cards */}
        {skillsGroups.map((group, idx) => (
          <Box key={group.group} sx={{ mb: 6 }}>
            <Typography variant="h3" sx={{ color: '#00ff41', fontFamily: 'Orbitron, sans-serif', mb: 3, textShadow: '0 0 10px #00ff41', fontWeight: 700 }}>
              {group.group}
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {group.skills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name}>
                  <SkillCard skill={skill} index={index} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}

        {/* Learning Section */}
        <LearningSection ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <LearningTitle>
              I'm Learning Now
            </LearningTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {learningTechnologies.map((tech, index) => (
                <LearningChip
                  key={tech}
                  label={tech}
                  index={index}
                  size="large"
                />
              ))}
            </Box>
          </motion.div>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              sx={{ background: '#00ff41', color: '#1a1a1a', fontWeight: 700, fontFamily: 'Orbitron, sans-serif', fontSize: '1.1rem', boxShadow: '0 0 10px #00ff41', borderRadius: '8px', px: 4, py: 1.5, '&:hover': { background: '#00e1ff', color: '#000' } }}
              onClick={() => setShowBackend(!showBackend)}
            >
              Click here!
            </Button>
          </Box>
          {showBackend && (
            <Box sx={{ mt: 6, textAlign: 'center' }}>
              <Typography variant="h4" sx={{ color: '#00ff41', fontFamily: 'Orbitron, sans-serif', mb: 3, textShadow: '0 0 10px #00ff41', fontWeight: 700 }}>
                I'm also learning Backend to be Full-Stack Developer
              </Typography>
              <Grid container spacing={4} justifyContent="center">
                {backendSkills.map((skill, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name}>
                    <Card sx={{ background: 'rgba(26,26,26,0.95)', border: `3px solid ${skill.color}`, borderRadius: '15px', boxShadow: `0 0 30px ${skill.color}`, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, transition: 'all 0.3s', '&:hover': { transform: 'scale(1.05)', boxShadow: `0 0 50px ${skill.color}` } }}>
                      <Box sx={{ width: 100, height: 100, mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={skill.image} alt={skill.name} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 0 10px #00ff41)' }} />
                      </Box>
                      <Typography variant="h6" sx={{ color: skill.color, fontFamily: 'Orbitron, sans-serif', mb: 1, fontWeight: 700 }}>{skill.name}</Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </LearningSection>
      </Container>
    </Box>
  );
};

export default Skills;