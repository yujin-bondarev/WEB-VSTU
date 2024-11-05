import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, Typography, Button, Box, Container, CssBaseline } from '@mui/material';
import AddRacerForm from './AddRacerForm';

const RacersCards = () => {
  const racers = useSelector(state => state.racers);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: 'REMOVE_RACER', payload: id });
  };

  const handleAdd = (newRacer) => {
    dispatch({
      type: 'ADD_RACER',
      payload: {
        id: Date.now(),
        ...newRacer
      }
    });
  };

  return (
    <CssBaseline>
      <Container sx={{ py: 4 }}>
        <AddRacerForm onAdd={handleAdd} />
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          mt: 4,
          justifyContent: 'flex-start' // Выравнивание карточек по левому краю
        }}>
          {racers.map((racer) => (
            <Card
              key={racer.id}
              sx={{
                width: 280,
                minWidth: 280,
                maxWidth: 280,
                m: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <CardContent sx={{
                flex: '1 0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <Typography variant="h5" component="div" gutterBottom>
                    {racer.name}
                  </Typography>
                  <Typography color="text.secondary">
                    Car Model: {racer.carModel}
                  </Typography>
                </div>
                <Button
                  onClick={() => handleDelete(racer.id)}
                  color="error"
                  variant="contained"
                  sx={{ mt: 2 }}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </CssBaseline>
  );
};

export default RacersCards;