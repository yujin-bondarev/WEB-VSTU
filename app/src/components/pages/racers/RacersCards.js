import React from "react";
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const RacersCards = ({ racers, delRacer, editRacer }) => {
  return (
      <Box sx={{ padding: '24px' }}> 
        {racers.map((racer, index) => (
          <Card key={index} sx={{ marginBottom: '16px' }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {racer.name}
              </Typography>
              <Typography color="text.secondary">
                Модель автомобиля: {racer.carModel}
              </Typography>
              <Button onClick={() => delRacer(racer.id)}>
                  Удалить
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
  );
};

export default RacersCards;