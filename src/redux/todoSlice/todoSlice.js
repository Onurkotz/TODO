import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [
      {
        id: "1",
        title: "Walk half hour!",
        completed: false,
      },
      {
        id: "2",
        title: "Work code!",
        completed: false,
      },
    ],
    activeFilter: "All",
  },
  reducers: {
    addList: (state, action) => {
      state.items.push(action.payload);
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.completed = !item.completed;
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter( (item) => item.completed === false)
      state.items = filtered
    }
  },
});

export const { addList, toggle, destroy, changeActiveFilter, clearCompleted } = todoSlice.actions;
export default todoSlice.reducer;
