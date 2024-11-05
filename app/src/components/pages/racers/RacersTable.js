import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, Button, TableHead, TableRow, Paper } from '@mui/material';
import AddRacerForm from './AddRacerForm';

const RacersTable = () => {
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
    <div>
      <AddRacerForm onAdd={handleAdd} />
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
            {racers.map((racer) => (
              <TableRow key={racer.id}>
                <TableCell>{racer.name}</TableCell>
                <TableCell>{racer.carModel}</TableCell>
                <TableCell>
                  <Button onClick={() => handleDelete(racer.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default RacersTable;