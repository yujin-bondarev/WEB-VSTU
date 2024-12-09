import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Константа для базового URL
const BASE_URL = 'http://localhost:8080';

// Функция для получения заголовков с токеном
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Асинхронный thunk для загрузки гонщиков
export const fetchRacers = createAsyncThunk('racers/fetchRacers', async () => {
  const response = await axios.get(`${BASE_URL}/racers`, getAuthHeaders());
  return response.data;
});

// Асинхронный thunk для удаления гонщика
export const deleteRacer = createAsyncThunk('racers/deleteRacer', async ({ id }, { rejectWithValue }) => {
  try {
    await axios.delete(`${BASE_URL}/racers/${id}`, getAuthHeaders());
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
  try {
    const response = await axios.post(`${BASE_URL}/racers`, newRacer, getAuthHeaders());
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      return rejectWithValue('Ошибка 403: У вас нет прав для добавления гонщика.');
    }
    return rejectWithValue('Ошибка при добавлении гонщика.');
  }
});

// Асинхронный thunk для редактирования гонщика
export const editRacer = createAsyncThunk('racers/editRacer', async ({ id, name, carModel }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`${BASE_URL}/racers/${id}`, { name, carModel }, getAuthHeaders());
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 403) {
      return rejectWithValue('Ошибка 403: У вас нет прав для редактирования гонщика.');
    }
    return rejectWithValue('Ошибка при редактировании гонщика.');
  }
});

const racersSlice = createSlice({
  name: 'racers',
  initialState: {
    racers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обработка состояния загрузки (pending)
      .addCase(fetchRacers.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(fetchRacers.fulfilled, (state, action) => {
        state.loading = false; 
        state.racers = action.payload; 
      })
      .addCase(fetchRacers.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.error.message;
      })
      // Обработка удаления гонщика
      .addCase(deleteRacer.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(deleteRacer.fulfilled, (state, action) => {
        state.loading = false; 
        state.racers = state.racers.filter(racer => racer.id !== action.payload); // Удаляем гонщика
      })
      .addCase(deleteRacer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })
      // Обработка добавления гонщика
      .addCase(addRacer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addRacer.fulfilled, (state, action) => {
        state.loading = false; 
        state.racers.push(action.payload); 
      })
      .addCase(addRacer.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.payload;
      })
      // Обработка редактирования гонщика
      .addCase(editRacer.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(editRacer.fulfilled, (state, action) => {
        state.loading = false; 
        const index = state.racers.findIndex(racer => racer.id === action.payload.id);
        if (index !== -1) {
          state.racers[index] = action.payload;
        }
      })
      .addCase(editRacer.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.payload; 
      });
  },
});

export default racersSlice.reducer;