import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/reducers/authReducer';
import { TextField, Button, Box, Typography, CssBaseline } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
    <CssBaseline>
      <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 32 }}>
        <Typography variant="h4" style={{ marginBottom: 16 }}>
          Вход
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Логин"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Пароль"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" type="submit">
            Войти
          </Button>
        </form>
      </Box>
    </CssBaseline>
  );
};

export default Login;