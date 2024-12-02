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
    if (name && carModel) {
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
        sx={{ mr: 1}}
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