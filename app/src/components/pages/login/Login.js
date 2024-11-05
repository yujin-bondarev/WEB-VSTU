import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/reducers/authReducer';
import { TextField, Button, Box, Typography } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1111') {
      dispatch(login());
    } else {
      alert('Неверный логин или пароль');
    }
  };
  


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Вход
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Пароль"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" type="submit">
          Войти
        </Button>
      </form>
    </Box>
  );
};

export default Login;