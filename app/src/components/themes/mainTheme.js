import { createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF4D4D', 
    },
    secondary: {
      main: '#4DD0E1',
    },
    background: {
      default: '#424242',
      paper: '#303030', 
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0BEC5',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FF4D4D',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        root: {
          backgroundColor: '#424242', 
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          margin: '8px', // Пример добавления отступа
        },
        containedSecondary: {
          backgroundColor: '#4DD0E1', 
          '&:hover': {
            backgroundColor: '#26C6DA', 
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            backgroundColor: '#000000', 
            color: '#FFFFFF', 
            borderRadius: 4,
            padding: '10px',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#616161',
            },
            '&:hover fieldset': {
              borderColor: '#757575',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FF4D4D',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#303030', 
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '16px',
          display: "flex" ,
          justifyContent: "center" ,
          alignItems: "center" ,
          flexDirection: "column",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h6: {
          marginBottom: '16px', // Пример добавления отступа для заголовков
        },
      },
    },
  },
  
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },

  
});

export default mainTheme;