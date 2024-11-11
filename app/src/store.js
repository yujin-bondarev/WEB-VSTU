import { thunk } from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import racersReducer from './redux/reducers/racersReducer';
import authReducer from './redux/reducers/authReducer';

const store = configureStore({
  reducer: {
    racers: racersReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Добавляем thunk в middleware
  devTools: process.env.NODE_ENV !== 'production', 
});

export default store; 