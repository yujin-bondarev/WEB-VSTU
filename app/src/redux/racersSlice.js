import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// Асинхронный thunk для загрузки гонщиков
export const fetchRacers = createAsyncThunk('racers/fetchRacers', async (token) => {
  const response = await axios.get('http://localhost:8080/racers', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
});

// Асинхронный thunk для удаления гонщика
export const deleteRacer = createAsyncThunk('racers/deleteRacer', async ({ id, token }) => {
  await axios.delete(`http://localhost:8080/racers/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return id; 
});

// Асинхронный thunk для добавления гонщика
export const addRacer = createAsyncThunk('racers/addRacer', async (newRacer) => {
    console.log("Отправка данных:", newRacer); // Для отладки
  const token = localStorage.getItem('token');
  const response = await axios.post('http://localhost:8080/racers', newRacer, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Ответ от сервера:", response.data); // Проверка ответа
  return response.data;
});

const racersSlice = createSlice({
  name: 'racers',
  initialState: [],
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRacers.fulfilled, (state, action) => {
        return action.payload; 
      })
      .addCase(deleteRacer.fulfilled, (state, action) => {
        return state.filter(racer => racer.id !== action.payload); 
      })
      .addCase(addRacer.fulfilled, (state, action) => {
        state.push(action.payload); 
    });
  },
});

// export const { } = racersSlice.actions;
export default racersSlice.reducer;