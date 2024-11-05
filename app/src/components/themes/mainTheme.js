import { createTheme } from '@mui/material/styles';

const mainTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF4D4D', // Приятный красный цвет для navbar
    },
    secondary: {
      main: '#4DD0E1', // Голубой цвет для кнопок удаления
    },
    background: {
      default: '#424242', // Серый фон
      paper: '#303030', // Чуть темнее серый для компонентов
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
          backgroundColor: '#FF4D4D', // Красный цвет для AppBar (navbar)
        },
      },
    },
    MuiCssBaseline: {
        styleOverrides: {
            root: ({ theme }) =>( {
                backgroundColor: theme.palette.background.default, // Красный цвет для AppBar (navbar)
              }),
        },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedSecondary: {
          backgroundColor: '#4DD0E1', // Голубой цвет для кнопок удаления
          '&:hover': {
            backgroundColor: '#26C6DA', // Немного темнее при наведении
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            backgroundColor: '#000000', // Черный фон для полей ввода
            color: '#FFFFFF', // Белый текст
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
          backgroundColor: '#303030', // Темно-серый фон для карточек
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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