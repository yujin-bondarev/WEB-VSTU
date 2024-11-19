import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, Button, TableHead, TableRow, Paper, CssBaseline, Typography } from '@mui/material';
import AddRacerForm from './AddRacerForm';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Импортируем uuidv4

const RacersTable = () => {
  const racers = useSelector(state => state.racers);
  const dispatch = useDispatch();

  // Загрузка гонщиков из API
  useEffect(() => {
    const fetchRacers = async () => {
      const token = localStorage.getItem('token'); // Получаем токен
      try {
        const response = await axios.get('http://localhost:8080/racers', {
          headers: {
            Authorization: `Bearer ${token}` // Добавляем токен в заголовок
          }
        });
        const racersData = response.data;
        dispatch({ type: 'ADD_MANY_RACERS', payload: racersData });
      } catch (error) {
        console.error('Ошибка при загрузке гонщиков:', error);
      }
    };

    fetchRacers();
  }, [dispatch]);

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
        <Paper sx={{ p: 3, maxWidth: 800, mx: 'auto', mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Car Model</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {racers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    <Typography variant="h6">Гонщики отсутствуют</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                racers.map((racer) => (
                  <TableRow key={racer.id}>
                    <TableCell>{racer.name}</TableCell>
                    <TableCell>{racer.carModel}</TableCell>
                    <TableCell>
                      <Button onClick={() => deleteRacer(racer.id)}>Удалить</Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </Paper>
      </CssBaseline>
    </div>
  );
};

export default RacersTable;