// App.js
import "./App.css";
import RacersAPI from "./api/service";
import { useState } from "react";
import { Box } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/router/Router.js';
import RacersTable from './components/pages/racers/RacersTable';
import Form from './components/pages/racers/AddRacerForm.js';
import NavBar from './components/content/NavBar';

const initialracers = RacersAPI.all();

function App() {
  const [racers, setRacers] = useState(initialracers);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showTable, setShowTable] = useState(false);

  const delRacer = (id) => {
    setRacers(prevRacers => prevRacers.filter(racer => racer.id !== id));
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

  const toggleShowTable = () => {
    setShowTable(!showTable);
  };

  return (
    <Router>
      <Box sx={{ padding: 4 }}>
        <NavBar 
          isLoggedIn={isLoggedIn} 
          handleLogout={handleLogout} 
          toggleShowTable={toggleShowTable} 
          showTable={showTable} 
        />
        
        {isLoggedIn && (<Form addRacer={addRacer} />)}

        {showTable ? (
          <RacersTable 
            racers={racers} 
            delRacer={delRacer} 
          />
        ) : (
          <AppRoutes
            isLoggedIn={isLoggedIn}
            handleLogin={setIsLoggedIn}
            racers={racers}
            addRacer={addRacer}
            delRacer={delRacer}
          />
        )}
      </Box>
    </Router>
  );
}

export default App;