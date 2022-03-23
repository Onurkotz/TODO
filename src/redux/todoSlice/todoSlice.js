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
  reducers: {},
});

export default todoSlice.reducer;
