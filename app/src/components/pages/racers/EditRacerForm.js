import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Box, Typography } from '@mui/material';
import { editRacer } from '../../../redux/racersSlice'; 

const EditRacerForm = ({ racer, onClose }) => {
  const [name, setName] = useState(racer.name);
  const [carModel, setCarModel] = useState(racer.carModel);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && carModel) {
      try {
        await dispatch(editRacer({ id: racer.id, name, carModel })).unwrap();
        onClose(); 
      } catch (error) {
        alert(error); 
      }
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <Typography variant="h6">Редактировать гонщика</Typography>
      <TextField
        label="Имя"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        sx={{ mr: 1 }}
      />
      <TextField
        label="Модель автомобиля"
        variant="outlined"
        value={carModel}
        onChange={(e) => setCarModel(e.target.value)}
        required
        sx={{ mr: 1 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Сохранить
      </Button>
      <Button onClick={onClose} variant="outlined" color="secondary" sx={{ ml: 1 }}>
        Отменить
      </Button>
    </Box>
  );
};

export default EditRacerForm;