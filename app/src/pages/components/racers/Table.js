import React from "react";
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const RacersTable = ({ racers, delRacer }) => {
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

// const RacersTable = ({ racers, delRacer }) => {
//   return (
//     <ThemeProvider theme={ThemeTable}> 
//     <MuiTable>
//       <TableHead>
//         <TableRow>
//           <TableCell>Name</TableCell>
//           <TableCell>Car Model</TableCell>
//           <TableCell>Remove</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {racers.map((racer, index) => {
//           return (
//             <TableRow key={index}>
//               <TableCell>{racer.name}</TableCell>
//               <TableCell>{racer.carModel}</TableCell>
//               <TableCell>
//                 <Button onClick={() => delRacer(racer.id)}>Delete</Button>
//               </TableCell>
//             </TableRow>
//           );
//         })}
//       </TableBody>
//     </MuiTable>
//   );
// };

export default RacersTable;