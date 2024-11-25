import { configureStore } from '@reduxjs/toolkit';
import racersReducer from './redux/racersSlice';
import authReducer from './redux/reducers/authReducer';
import { thunk } from 'redux-thunk'; 

const store = configureStore({
  reducer: {
    racers: racersReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;