import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';
import axios from 'axios';

const AddRacerForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [carModel, setCarModel] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() && carModel.trim()) {
      const newRacer = { name, carModel };
      const token = localStorage.getItem('token'); // Получаем токен
      try {
        const response = await axios.post('http://localhost:8080/racers', newRacer, {
          headers: {
            Authorization: `Bearer ${token}` // Добавляем токен в заголовок
          }
        });
        onAdd(response.data); // Используем данные из ответа сервера, который включает id
        setName('');
        setCarModel('');
      } catch (error) {
        console.error('Ошибка при добавлении гонщика:', error);
      }
    }
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 400, mx: 'auto', mt: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Имя гонщика"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Модель автомобиля"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" type="submit" fullWidth>
          Добавить гонщика
        </Button>
      </form>
    </Paper>
  );
};

export default AddRacerForm;