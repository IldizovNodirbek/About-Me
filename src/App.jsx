import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Introduction from './pages/Introduction/Introduction'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
import Projects from './pages/Projects/Projects'

function App() {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      backgroundColor: '#000000',
      color: '#ffffff',
      overflow: 'hidden'
    }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Box>
  )
}

export default App