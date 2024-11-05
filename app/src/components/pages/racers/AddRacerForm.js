import React, { useState } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';

const AddRacerForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [carModel, setCarModel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && carModel.trim()) {
      onAdd({ name, carModel });
      setName('');
      setCarModel('');
    }
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 400, mx: 'auto' }}>
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2 
        }}
      >
        <TextField
          label="Racer Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Car Model"
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add Racer
        </Button>
      </Box>
    </Paper>
  );
};

export default AddRacerForm;