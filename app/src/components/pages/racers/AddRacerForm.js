import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Box, Typography } from '@mui/material';
import { addRacer } from '../../../redux/racersSlice';

const AddRacerForm = () => {
  const [name, setName] = useState('');
  const [carModel, setCarModel] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //(только английские буквы)
    const nameRegex = /^[A-Za-z]+$/;
    //(буквы и цифры, но не только цифры)
    const carModelRegex = /^(?=.*[A-Za-z])[A-Za-z0-9]+$/;

    if (name && carModel) {
      if (!nameRegex.test(name)) {
        alert('Имя должно состоять только из английских букв.');
        return;
      }

      if (!carModelRegex.test(carModel)) {
        alert('Модель автомобиля должна содержать хотя бы одну букву и может содержать цифры.');
        return;
      }

      try {
        await dispatch(addRacer({ name, carModel })).unwrap();
        setName('');
        setCarModel('');
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <Box component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Typography variant="h6">Добавить гонщика</Typography>
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
        Добавить
      </Button>
    </Box>
  );
};

export default AddRacerForm;