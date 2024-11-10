import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; // Импортируем thunk как именованный экспорт
import racersReducer from './redux/reducers/racersReducer';
import authReducer from './redux/reducers/authReducer';

const store = configureStore({
  reducer: {
    racers: racersReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Добавляем thunk в middleware
  devTools: process.env.NODE_ENV !== 'production', // Включить devTools только в режиме разработки
});

export default store; 