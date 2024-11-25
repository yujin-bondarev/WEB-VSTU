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
export const deleteRacer = createAsyncThunk('racers/deleteRacer', async ({ id, token }, { rejectWithValue }) => {
  try {
    await axios.delete(`http://localhost:8080/racers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return id;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      return rejectWithValue('Ошибка 403: У вас нет прав для удаления гонщика.');
    }
    return rejectWithValue('Ошибка при удалении гонщика.');
  }
});

// Асинхронный thunk для добавления гонщика
export const addRacer = createAsyncThunk('racers/addRacer', async (newRacer, { rejectWithValue }) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.post('http://localhost:8080/racers', newRacer, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      return rejectWithValue('Ошибка 403: У вас нет прав для добавления гонщика.');
    }
    return rejectWithValue('Ошибка при добавлении гонщика.');
  }
});

export const editRacer = createAsyncThunk('racers/editRacer', async ({ id, name, carModel }) => {
  const token = localStorage.getItem('token');
  const response = await axios.put(`http://localhost:8080/racers/${id}`, { name, carModel }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
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
      })
      .addCase(editRacer.fulfilled, (state, action) => {
        const index = state.findIndex(racer => racer.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload; // Обновляем гонщика в состоянии
        }
      });
  },
});

// export const { } = racersSlice.actions;
export default racersSlice.reducer;