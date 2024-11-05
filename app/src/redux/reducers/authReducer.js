import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('LOGIN', (state) => {
      state.isLoggedIn = true;
    })
    .addCase('LOGOUT', (state) => {
      state.isLoggedIn = false;
    });
});

export const login = () => ({ type: 'LOGIN' });
export const logout = () => ({ type: 'LOGOUT' });

export default authReducer;