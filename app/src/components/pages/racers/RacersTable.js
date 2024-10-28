// RacersTable.js
import React from 'react';
import { Table, TableBody, TableCell, Button, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const RacersTable = ({ racers, delRacer, editRacer }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Car Model</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {racers.map((racer) => (
                        <TableRow key={racer.id}>
                            <TableCell>{racer.id}</TableCell>
                            <TableCell>{racer.name}</TableCell>
                            <TableCell>{racer.carModel}</TableCell>
                            <TableCell>
                                <Button onClick={() => delRacer(racer.id)} variant="contained" color="secondary">
                                    Удалить
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RacersTable;