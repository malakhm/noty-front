import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./slice";

const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});

export default store;