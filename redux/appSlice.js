import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    faqInfo: [],
    selectedValue: "",
    price: 0,
    gpu: "RTX3060",
  },
  reducers: {
    selectValue: (state, action) => {
      state.selectedValue = action.payload;
    },
    getFaqs: (state, action) => {
      state.faqInfo = action.payload;
    },
    setPrice: (state, action) => {
      state.price = state.price + action.payload;
    },
    setGpu: (state, action) => {
      state.gpu = action.payload;
    }
  },
});

export const { selectValue, getFaqs, setGpu, setPrice } = appSlice.actions;

export default appSlice.reducer;