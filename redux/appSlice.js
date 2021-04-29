import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    faqInfo: [],
    selectedValue: "",
  },
  reducers: {
      selectValue: (state, action) => {
          state.selectedValue = action.payload
      },
  }
});

export const { selectValue } = appSlice.actions;

export default appSlice.reducer;