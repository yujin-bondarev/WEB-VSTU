import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, Button, TableHead, TableRow, Paper, CssBaseline, Typography } from '@mui/material';
import AddRacerForm from './AddRacerForm';
import { fetchRacers, deleteRacer } from '../../../redux/racersSlice';

const RacersTable = () => {
  const racers = useSelector(state => state.racers);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(fetchRacers(token)); // Загружаем гонщиков
  }, [dispatch]);

  const handleDeleteRacer = (id) => {
    const token = localStorage.getItem('token');
    dispatch(deleteRacer({ id, token })); // Удаляем гонщика
  };

  return (
    <div>
      <CssBaseline>
        <AddRacerForm />
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
                      <Button onClick={() => handleDeleteRacer(racer.id)}>Удалить</Button>
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