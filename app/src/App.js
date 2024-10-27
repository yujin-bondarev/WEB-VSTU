// App.js
import "./App.css";
import RacersAPI from "./api/service";
import { useState, useEffect } from "react"; // Add useEffect here
import { Box, AppBar, Toolbar, Button } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/Router.js';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticatedUser , logoutUser  } from './actions/AuthAction';

const initialracers = RacersAPI.all();

function App() {
  const [racers, setRacers] = useState(initialracers);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.authState.isAuthenticated);

  useEffect(() => {
    const authStatus = localStorage.getItem('auth') === 'true';
    if (authStatus) {
      dispatch(setAuthenticatedUser ({ username: 'admin', email: 'user@example.com' }));
    }
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.setItem('auth', 'false');
    dispatch(logoutUser ());
  };

  const delRacer = (id) => {
    setRacers(prevRacers => prevRacers.filter(racer => racer.id !== id));
  };

  const addRacer = (racer) => {
    const newracer = RacersAPI.add(racer);
    if (newracer) {
      setRacers([...racers, newracer]);
    }
  };
  
  return (
    <Router>
      <Box sx={{ padding: 4 }}>
        <AppBar position="static">
          <Toolbar>
            {isAuthenticated && <Button color="inherit" onClick={handleLogout}>Logout</Button>}
          </Toolbar>
        </AppBar>
        <AppRoutes
          isAuthenticated={isAuthenticated}
          //handleLogin={setIsLoggedIn}
          racers={racers}
          addRacer={addRacer}
          delRacer={delRacer}
        />
      </Box>
    </Router>
  );
}

export default App;