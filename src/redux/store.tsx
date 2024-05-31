import { configureStore } from "@reduxjs/toolkit";
import fieldSlice from "./features/fields/fieldSlice";

export const store = configureStore({
  reducer: {
    fields: fieldSlice,
  },
});
