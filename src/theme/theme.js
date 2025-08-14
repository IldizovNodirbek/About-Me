import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ff41',
      light: '#4dff73',
      dark: '#00cc34',
    },
    secondary: {
      main: '#00e1ff',
      light: '#4de8ff',
      dark: '#00b4cc',
    },
    background: {
      default: '#000000',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#00ff41',
    },
  },
  typography: {
    fontFamily: '"Cherry Cream Soda", "Orbitron", sans-serif',
    h1: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
      textShadow: '0 0 10px #00ff41',
    },
    h2: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Orbitron", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: '"Cherry Cream Soda", cursive',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontFamily: '"Orbitron", sans-serif',
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#00ff41',
            },
            '&:hover fieldset': {
              borderColor: '#00ff41',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00e1ff',
              boxShadow: '0 0 15px #00ff41',
            },
          },
        },
      },
    },
  },
})

export default theme