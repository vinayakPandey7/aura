"use client";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { saveToLocal } from "./middlewares/saveToLocal";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(saveToLocal);
  },
});
export default store;
