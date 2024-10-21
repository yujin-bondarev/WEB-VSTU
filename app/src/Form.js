import React, { useState } from "react"; // Добавьте useState здесь
import { TextField, Button, Box } from '@mui/material';

const Form = ({ handleSubmit, inRacer }) => {
  const [racer, setRacers] = useState(inRacer);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRacers({ ...racer, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(racer);
    setRacers(inRacer);
  };

  return (
    
      <Box component="form" onSubmit={onSubmit} sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' }, // Стили для всех TextField
        padding: '24px',
        backgroundColor: '#f7f7f8',
        borderRadius: '8px',
      }}>
        <TextField
          label="Имя"
          name="name"
          value={racer.name}
          onChange={handleChange}
        />
        <TextField
          label="Модель автомобиля"
          name="carModel"
          value={racer.carModel}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Добавить</Button>
      </Box>
  );
};

export default Form;