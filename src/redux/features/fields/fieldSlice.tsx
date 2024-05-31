import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  vendorName: true,
  companyStrength: true,
  fieldExp: true,
  revUSD: true,
  projDuration: false,
  projEfforts: false,
  subDate: false,
  delModel: false,
  pdfPath: false,
  about: false,
};

export const fieldSlice = createSlice({
  name: "fields",
  initialState,
  reducers: {
    setFields: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const fieldSelector = (state) => state.fields;

export const { setFields } = fieldSlice.actions;

export default fieldSlice.reducer;
