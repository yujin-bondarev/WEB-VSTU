
import { createReducer } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: "Ben Blocker", carModel: "BMW" },
  { id: 2, name: "Dave Defender", carModel: "AUDI" },
  { id: 3, name: "Sam Sweeper", carModel: "Mercedes" },
  { id: 4, name: "Matt Midfielder", carModel: "Lamborghini" },
];

const racersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('ADD_RACER', (state, action) => {
      state.push(action.payload);
    })
    .addCase('REMOVE_RACER', (state, action) => {
      return state.filter(racer => racer.id !== action.payload);
    });
});

export default racersReducer;