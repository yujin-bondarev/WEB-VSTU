import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/themes/mainTheme'; 
import AppRouter from './components/router/AppRouter';
import Navbar from './components/context/NavBar';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux/reducers/authReducer';

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          <AppRouter />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;