import { configureStore } from '@reduxjs/toolkit';
import racersReducer from './redux/reducers/racersReducer';
import authReducer from './redux/reducers/authReducer';

const store = configureStore({
  reducer: {
    racers: racersReducer,
    auth: authReducer,
  },
});

export default store;