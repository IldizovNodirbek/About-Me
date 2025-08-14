import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const location = useLocation()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navItems = [
    { name: 'Introduction', path: '/introduction' },
    { name: 'Skills', path: '/skills' },
    { name: 'My Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  const drawer = (
    <Box sx={{ 
      width: 250, 
      height: '100%', 
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(10px)'
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            component={Link} 
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: '#fff',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: 'rgba(0, 255, 65, 0.1)',
              }
            }}
          >
            <ListItemText 
              primary={item.name}
              sx={{
                '& .MuiTypography-root': {
                  fontFamily: '"Cherry Cream Soda", cursive',
                  fontSize: '1.2rem',
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 255, 65, 0.2)'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                fontFamily: '"Orbitron", sans-serif',
                fontWeight: 'bold',
                color: '#fff',
                textDecoration: 'none',
                textShadow: '0 0 10px #00ff41',
                '& span': {
                  color: '#00ff41',
                }
              }}
            >
              ABOUT <span>ME</span>
            </Typography>
          </motion.div>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ color: '#fff' }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box sx={{ display: 'flex', gap: 3 }}>
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Typography
                      component={Link}
                      to={item.path}
                      sx={{
                        color: location.pathname === item.path ? '#00ff41' : '#fff',
                        textDecoration: 'none',
                        fontFamily: '"Cherry Cream Soda", cursive',
                        fontSize: '1.2rem',
                        transition: 'all 0.3s ease',
                        borderBottom: location.pathname === item.path ? '2px solid #00ff41' : 'none',
                        '&:hover': {
                          color: '#00ff41',
                          borderBottom: '2px solid #00ff41',
                        }
                      }}
                    >
                      {item.name}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: 'transparent',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Navbar