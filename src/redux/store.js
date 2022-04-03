import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice/todoSlice";
import { throttle } from "lodash";
import { saveState, loadState } from "./localStorage";

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
