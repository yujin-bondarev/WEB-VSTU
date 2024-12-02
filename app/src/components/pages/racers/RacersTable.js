import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, Button, TableHead, TableRow, Paper, CssBaseline, Typography } from '@mui/material';
import AddRacerForm from './AddRacerForm';
import EditRacerForm from './EditRacerForm';
import { fetchRacers, deleteRacer } from '../../../redux/racersSlice';

const RacersTable = () => {
  const racers = useSelector(state => state.racers);
  const dispatch = useDispatch();
  const [editingRacer, setEditingRacer] = useState(null); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(fetchRacers(token)); 
  }, [dispatch]);

  const handleDeleteRacer = async (id) => {
    const token = localStorage.getItem('token');
    try {
      await dispatch(deleteRacer({ id, token })).unwrap();
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
                      <Button variant="outlined" onClick={() => handleEditRacer(racer)}>
                        Редактировать
                      </Button>
                      <Button onClick={() => handleDeleteRacer(racer.id)}>Удалить</Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </Paper>
        {editingRacer && (
          <EditRacerForm racer={editingRacer} onClose={closeEditForm} />
        )}
      </CssBaseline>
    </div>
  );
};

export default RacersTable;