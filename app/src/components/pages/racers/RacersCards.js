import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, Typography, Button, Box, Container, CssBaseline } from '@mui/material';
import AddRacerForm from './AddRacerForm';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Импортируем uuidv4

const RacersCards = () => {
  const racers = useSelector(state => state.racers);
  const dispatch = useDispatch();

  const deleteRacer = async (id) => {
    const token = localStorage.getItem('token'); // Получаем токен
    try {
      await axios.delete(`http://localhost:8080/racers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}` // Добавляем токен в заголовок
        }
      });
      dispatch({ type: 'REMOVE_RACER', payload: id });
    } catch (error) {
      console.error('Ошибка при удалении гонщика:', error);
    }
  };

  const addRacer = (newRacer) => {
    dispatch({
      type: 'ADD_RACER',
      payload: { ...newRacer, id: uuidv4() } // Генерируем уникальный ID для нового гонщика
    });
  };

  return (
    <div>
      <CssBaseline>
        <AddRacerForm onAdd={addRacer} />
        <Container sx={{ py: 4 }}>
          {racers.length === 0 ? (
            <Typography variant="h6" sx={{ textAlign: 'center', width: '100%', marginTop: 4 }}>
              Гонщики отсутствуют
            </Typography>
          ) : (
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              mt: 4,
              justifyContent: 'flex-start' 
            }}>
              {racers.map((racer) => (
                <Card
                  key={racer.id} // Уникальный ключ для каждого гонщика
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
                      <Typography variant="h5" component="h2">
                        {racer.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Модель автомобиля: {racer.carModel}
                      </Typography>
                    </div>
                  </CardContent>
                  <Button onClick={() => deleteRacer(racer.id)} variant="contained" color="error">
                    Удалить
                  </Button>
                </Card>
              ))}
            </Box>
          )}
        </Container>
      </CssBaseline>
    </div>
  );
};

export default RacersCards;