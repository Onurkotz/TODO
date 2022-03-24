import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [
      {
        id: "1",
        title: "Walk half hour!",
        conplete: false,
      },
      {
        id: "2",
        title: "Work code!",
        conplete: false,
      },
    ],
  },
  reducers: {
    addList: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addList } = todoSlice.actions;
export default todoSlice.reducer;
