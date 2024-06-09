import { combineReducers } from "@reduxjs/toolkit";
import { productSlice } from "./slice";

const { reducer: productReducer } = productSlice;

const rootReducer = combineReducers({
  PRODUCT: productReducer,
});
export default rootReducer;
