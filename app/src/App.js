// App.js
import "./App.css";
import RacersAPI from "./api/service";
import { useState } from "react";
import { Box, AppBar, Toolbar, Button } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './pages/components/router/Router.js'; // Импортируем новый компонент

const initialracers = RacersAPI.all();

function App() {
  const [racers, setRacers] = useState(initialracers);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const delRacer = (id) => {
    if (RacersAPI.delete(id)) {
      setRacers(racers.filter((racer) => racer.id !== id));
    }
  };

  const addRacer = (racer) => {
    const newracer = RacersAPI.add(racer);
    if (newracer) {
      setRacers([...racers, newracer]);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Box sx={{ padding: 4 }}>
        <AppBar position="static">
          <Toolbar>
            {isLoggedIn && <Button color="inherit" onClick={handleLogout}>Logout</Button>}
          </Toolbar>
        </AppBar>
        <AppRoutes 
          isLoggedIn={isLoggedIn} 
          handleLogin={setIsLoggedIn} 
          racers={racers} 
          addRacer={addRacer} 
          delRacer={delRacer} 
        />
      </Box>
    </Router>
  );
}

export default App;