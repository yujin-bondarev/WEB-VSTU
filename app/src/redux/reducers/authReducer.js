import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: null, // поле для хранения токена
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('LOGIN', (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token; 
    })
    .addCase('LOGOUT', (state) => {
      state.isLoggedIn = false;
      state.token = null; 
    });
});

export const login = (token) => ({ type: 'LOGIN', payload: { token } });
export const logout = () => ({ type: 'LOGOUT' });

export default authReducer;