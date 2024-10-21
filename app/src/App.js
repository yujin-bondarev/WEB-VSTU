import "./App.css";
import RacersAPI from "./api/service";
import Table from "./components/racers/Table.js";
import Form from "./components/racers/Form.js";
import Login from "./components/login/Login.js";
import { useState } from "react";
import { Box, Typography } from '@mui/material';

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

  return (
    <Box sx={{ padding: 4 }}>
      {!isLoggedIn ? (
        <Login handleLogin={setIsLoggedIn} />
      ) : (
        <>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Гонщики
          </Typography>
          <Form handleSubmit={addRacer} inRacer={{ name: "", carModel: ""}} />
          <Table racers={racers} delRacer={delRacer} />
        </>
      )}
    </Box>
  );
}

export default App;
