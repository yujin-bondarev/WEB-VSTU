// components/Routes.js
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login.js';
import Table from '../pages/racers/RacersCards.js';
import { Typography } from '@mui/material';

const AppRoutes = ({ isLoggedIn, handleLogin, racers, addRacer, delRacer }) => {
  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/racers" /> : <Login handleLogin={handleLogin} />} />
      <Route path="/racers" element={isLoggedIn ? (
        <>
          <Typography variant="h4" sx={{ marginBottom: 2 }}>
            Гонщики
          </Typography>
          <Table racers={racers} delRacer={delRacer} />
        </>
      ) : (
        <Navigate to="/" />
      )} />
    </Routes>
  );
};

export default AppRoutes; 