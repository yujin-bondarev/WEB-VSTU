import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, Button, TableHead, TableRow, Paper, CssBaseline, Typography } from '@mui/material';
import AddRacerForm from './AddRacerForm';

const RacersTable = () => {
  const racers = useSelector(state => state.racers);
  const dispatch = useDispatch();

  console.log(" RacersTable racers:", racers); // Отладочное сообщение

  const deleteRacer = (id) => {
    dispatch({ type: 'REMOVE_RACER', payload: id });
  };

  const addRacer = (newRacer) => {
    dispatch({ 
      type: 'ADD_RACER', 
      payload: {
        id: Date.now(),
        ...newRacer
      }
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
                    <Typography variant="h6">
                      Клиенты отсутствуют
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                racers.map((racer) => (
                  <TableRow key={racer.id}>
                    <TableCell>{racer.name}</TableCell>
                    <TableCell>{racer.carModel}</TableCell>
                    <TableCell>
                      <Button onClick={() => deleteRacer(racer.id)}>Delete</Button>
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