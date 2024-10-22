// components/Routes.js
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../login/Login.js';
import Table from '../racers/Table.js';
import Form from '../racers/Form.js';
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
          <Form handleSubmit={addRacer} inRacer={{ name: "", carModel: "" }} />
          <Table racers={racers} delRacer={delRacer} />
        </>
      ) : (
        <Navigate to="/" />
      )} />
    </Routes>
  );
};

export default AppRoutes; 