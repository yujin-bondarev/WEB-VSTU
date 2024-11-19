import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  token: null, // Добавьте поле для хранения токена
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('LOGIN', (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token; // Сохраните токен
    })
    .addCase('LOGOUT', (state) => {
      state.isLoggedIn = false;
      state.token = null; // Очистите токен при выходе
    });
});

export const login = (token) => ({ type: 'LOGIN', payload: { token } }); // Передавайте токен в action
export const logout = () => ({ type: 'LOGOUT' });

export default authReducer;