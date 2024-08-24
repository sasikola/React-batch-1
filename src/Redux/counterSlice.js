import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 5,
    count: 3,
  },
  reducers: {
    increment: (state, action) => {
      state.value += 9;
    },
    increment1: (state) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;


// slice --> reducer + actions
// reducer is a function, it will allow to create a actions

// to update the state value