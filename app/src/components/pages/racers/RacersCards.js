import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, Typography, Button, Box, Container, CssBaseline } from '@mui/material';
import AddRacerForm from './AddRacerForm';
import EditRacerForm from './EditRacerForm';
import { deleteRacer } from '../../../redux/racersSlice'; 

const RacersCards = () => {
  const racers = useSelector(state => state.racers.racers);
  const dispatch = useDispatch();
  const [editingRacer, setEditingRacer] = useState(null); 

  const handleDeleteRacer = async (id) => {
    try {
      await dispatch(deleteRacer(id)).unwrap();
    } catch (error) {
      alert(error); 
    }
  };

  const handleEditRacer = (racer) => {
    setEditingRacer(racer); 
  };

  const closeEditForm = () => {
    setEditingRacer(null); 
  };

  return (
    <div>
      <CssBaseline>
        <Container>
          <AddRacerForm />
        </Container>
        <Container>
          {racers.length === 0 ? (
            <Typography variant="h6" style={{ textAlign: 'center', width: '100%', marginTop: 4 }}>
              Гонщики отсутствуют
            </Typography>
          ) : (
            <Box style={{ display: 'flex', flexWrap: 'wrap', gap: 30, marginTop: 4 }}>
              {racers.map((racer) => (
                <Card key={racer.id}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      Гонщик: {racer.name}
                    </Typography>
                    <Typography variant="body5" color="text.secondary">
                      Модель автомобиля: {racer.carModel}
                    </Typography>
                  </CardContent>
                  <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick={() => handleEditRacer(racer)} variant="outlined">
                      Редактировать
                    </Button>
                    <Button onClick={() => handleDeleteRacer(racer.id)} variant="contained" color="error">
                      Удалить
                    </Button>
                  </Box>
                </Card>
              ))}
            </Box>
          )}
        </Container>
        {editingRacer && (
          <EditRacerForm racer={editingRacer} onClose={closeEditForm} />
        )}
      </CssBaseline>
    </div>
  );
};

export default RacersCards;