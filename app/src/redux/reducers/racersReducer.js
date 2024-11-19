import { createReducer } from '@reduxjs/toolkit';

const initialState = [];

const racersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('ADD_RACER', (state, action) => {
      state.push(action.payload);
    })
    .addCase('REMOVE_RACER', (state, action) => {
      return state.filter(racer => racer.id !== action.payload);
    })
    .addCase('ADD_MANY_RACERS', (state, action) => {
      return action.payload;
    });
});

export default racersReducer;