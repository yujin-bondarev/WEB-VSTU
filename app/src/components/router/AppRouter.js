import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../pages/login/Login';
import RacersTable from '../pages/racers/RacersTable';
import RacersCards from '../pages/racers/RacersCards';

const AppRouter = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/racers" /> : <Login />} />
      <Route path="/racers" element={isLoggedIn ? <RacersTable /> : <Navigate to="/" />} />
      <Route path="/racers/cards" element={isLoggedIn ? <RacersCards /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;