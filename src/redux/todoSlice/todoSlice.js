import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
  },
  reducers: {},
});

export default todoSlice.reducer;
