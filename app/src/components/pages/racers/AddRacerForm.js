// AddRacerForm.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const AddRacerForm = ({ addRacer }) => {
  const [name, setName] = useState('');
  const [carModel, setCarModel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && carModel.trim()) {
      addRacer({ name, carModel });
      setName('');
      setCarModel('');
    }
  };

  return (
    <AddRacerForm onSubmit={handleSubmit}>
      <TextField
        label="Имя гонщика"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Модель автомобиля"
        variant="outlined"
        value={carModel}
        onChange={(e) => setCarModel(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Добавить гонщика
      </Button>
    </AddRacerForm>
  );
};

export default AddRacerForm;
