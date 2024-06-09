import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import {
  getProductDetail,
  getProductList,
} from "./api/fetcher/product.fetchers";

export const getProductListBuilder = (
  builder: ActionReducerMapBuilder<any>
) => {
  builder.addCase(getProductList.pending, (state, action) => {
    // Handle when api call is in progress
  });
  builder.addCase(getProductList.rejected, (state, action) => {
    // Hande when api call is rejected
  });
  builder.addCase(getProductList.fulfilled, (state, action) => {
    state.productList = action.payload;
  });
};

export const getProductDetailBuilder = (
  builder: ActionReducerMapBuilder<any>
) => {
  builder.addCase(getProductDetail.pending, (state, action) => {
    // Handle when api call is in progress
  });
  builder.addCase(getProductDetail.rejected, (state, action) => {
    // Hande when api call is rejected
  });
  builder.addCase(getProductDetail.fulfilled, (state, action) => {
    state.productDetail = action.payload;
  });
};
