import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 34, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
    increaseByFive(state) {
      state.counter += 5;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleShowCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice;
