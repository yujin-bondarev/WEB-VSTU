import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, Button, TableHead, TableRow, Paper, CssBaseline, Typography, Container } from '@mui/material';
import AddRacerForm from './AddRacerForm';
import EditRacerForm from './EditRacerForm';
import { fetchRacers, deleteRacer } from '../../../redux/racersSlice';

const RacersTable = () => {
  const racers = useSelector(state => state.racers.racers);
  const dispatch = useDispatch();
  const [editingRacer, setEditingRacer] = useState(null);

  useEffect(() => {
    dispatch(fetchRacers());
  }, [dispatch]);

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
        
        <Paper style={{ padding: 3, maxWidth: 800, margin: 'auto', marginTop: 16 }}>
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