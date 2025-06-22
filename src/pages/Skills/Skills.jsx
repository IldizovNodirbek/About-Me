import React, { useState } from 'react';
import { 
  Box, 
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

const skillsData = [
  {
    name: 'HTML',
    image: '/Images/html.png',
    color: '#e34c26',
    description: 'I can create static web pages with HTML, use semantic tags and build a structure optimized for SEO. At the same time, I make effective use of HTML5 for proper page structure and improved user experience. For example, I can use forms, multimedia elements and other modern features.'
  },
  {
    name: 'CSS',
    image: '/Images/css-3.png',
    color: '#1572b6',
    description: 'I create responsive designs with CSS, Flexbox, Grid and I can build modern interfaces using animations. Using CSS3 properties, gradients, various through transformations and media queries I prepare designs suitable for devices. Also, CSS I also have experience working with preprocessors (such as SCSS).'
  },
  {
    name: 'JavaScript',
    image: '/Images/js.png',
    color: '#f7df1e',
    description: 'I add dynamic functions with JavaScript, DOM manipulation and working with asynchronous requests (AJAX). I know ES6+ features (arrow functions, promises), I write modern code using async/await. With that together, from simple interactive elements to complex SPAs I can use JavaScript to develop.'
  },
  {
    name: 'Tailwind CSS',
    image: '/Images/tailwindcss.png',
    color: '#00e1ff',
    description: 'I can build fast and flexible designs with Tailwind CSS. By reducing code through a utility-first approach, responsive and I create modern interfaces. Tailwind\'s work efficiently on various projects due to its flexibility i can'
  },
  {
    name: 'Material UI',
    image: '/Images/materialUI.png',
    color: '#007bff',
    description: 'From ready-made components in React projects with Material UI I build fast and beautiful interfaces using Google\'s This library is based on Material Design principles to improve the user experience using modern I create designs.'
  },
  {
    name: 'React',
    image: '/Images/atom.png',
    color: '#00d8ff',
    description: 'Dynamic and component-based web applications with React I will develop. Efficient and fast using virtual DOM I can build interfaces. With React Hooks and Context API I also know how to manage the situation.'
  },
  {
    name: 'Redux',
    image: '/Images/redux.png',
    color: '#764abc',
    description: 'I manage state in complex React projects with Redux. Reducers, actions and middleware (for example, Redux Thunk) I can organize data efficiently.'
  },
  {
    name: 'Framer Motion',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300',
    color: '#00ff41',
    description: 'I create smooth and professional animations using Framer Motion. From simple transitions to complex gesture-based interactions, I can enhance user experience with beautiful motion design.'
  },
  {
    name: 'React Hook Form',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=300',
    color: '#ec5990',
    description: 'I build performant and flexible forms with React Hook Form. Minimal re-renders, easy validation, and great developer experience make it my go-to choice for form handling.'
  },
  {
    name: 'React Router',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=300',
    color: '#ca4245',
    description: 'I implement client-side routing in React applications using React Router. From simple navigation to complex nested routes and protected routes, I can handle all routing needs.'
  },
  {
    name: 'Vercel',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300',
    color: '#000000',
    description: 'I deploy and host modern web applications using Vercel. With automatic deployments, serverless functions, and global CDN, I ensure fast and reliable application delivery.'
  },
  {
    name: 'Netlify',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300',
    color: '#00c7b7',
    description: 'I deploy static sites and JAMstack applications using Netlify. With continuous deployment, form handling, and edge functions, I create modern web experiences.'
  },
  {
    name: 'Git',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=300',
    color: '#f05032',
    description: 'I use Git for version control and collaborative development. From basic commits to complex branching strategies, I can manage code efficiently and work effectively in teams.'
  },
  {
    name: 'GitHub',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300',
    color: '#333333',
    description: 'I use GitHub for code hosting, collaboration, and project management. With pull requests, issues, and GitHub Actions, I can maintain high-quality codebases and automate workflows.'
  }
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
        <Grid container spacing={4} justifyContent="center">
          {skillsData.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={skill.name}>
              <SkillCard skill={skill} index={index} />
            </Grid>
          ))}
        </Grid>

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
        </LearningSection>
      </Container>
    </Box>
  );
};

export default Skills;