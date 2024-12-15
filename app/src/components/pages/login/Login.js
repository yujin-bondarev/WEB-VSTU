import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Box, Typography, CssBaseline } from '@mui/material';
import axios from 'axios';
import { login } from '../../../redux/reducers/authReducer'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/authenticate', {
        name: username,
        password: password,
      });

      if (response.status === 200) {
        
        localStorage.setItem('token', response.data.jwtToken);
        dispatch(login()); 
      }
    } catch (error) {
      alert('Неверный логин или пароль');
    }
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