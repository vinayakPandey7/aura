"use client";
import { CartData, UserProductSlice } from "@/app/ts/interface/redux";
import { getStoredState } from "@/app/utils/common";
import { createSlice, current } from "@reduxjs/toolkit";
import { getProductDetailBuilder, getProductListBuilder } from "../builders";
export const initalTestState: UserProductSlice = {
  currentProduct: null,
  cartData: { cartTotalPrice: 0, cartTotalPriceSaved: 0, cartProducts: [] },
  wishlist: [],
  productList: [],
  productDetail: [],
};

const _persistedState = getStoredState("USER_PRODUCT", initalTestState);
const initialState = { ...initalTestState, ..._persistedState };

export const productSlice = createSlice({
  name: "productSlice",
  initialState: initialState as UserProductSlice,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    setCartProduct: (state, action) => {
      const exists = current(state.cartData)?.cartProducts.some(
        (item) => item._id === action.payload._id
      );

      if (!exists) {
        const cartData = {
          cartTotalPrice:
            current(state.cartData)?.cartTotalPrice +
            action.payload?.currentPrice,
          cartTotalPriceSaved:
            current(state.cartData)?.cartTotalPrice +
            action.payload?.markedPrice,
          cartProducts: [...state.cartData.cartProducts, action.payload],
        };
        state.cartData = cartData;
      }
    },
    delteCartProduct: (state, action) => {
      const remainingItems = current(state.cartData)?.cartProducts?.filter(
        (item) => item._id !== action?.payload?._id
      );

      if (remainingItems) {
        const cartData = {
          cartTotalPrice:
            current(state.cartData)?.cartTotalPrice -
            action.payload?.currentPrice,
          cartTotalPriceSaved:
            current(state.cartData)?.cartTotalPrice -
            action.payload?.markedPrice,
          cartProducts: remainingItems,
        };
        state.cartData = cartData;
      }
    },
    addItemInWishlist: (state, action) => {
      const exists = state.wishlist.some(
        (item) => item._id === action.payload._id
      );
      if (!exists) {
        state.wishlist = [...state.wishlist, action.payload];
      }
    },
    removeItemInWishlist: (state, action) => {
      const remainingItems = current(state.wishlist)?.filter(
        (item) => item._id !== action?.payload?._id
      );

      if (remainingItems) {
        state.wishlist = remainingItems;
      }
    },
  
  },
  extraReducers: (builders) => {
    getProductListBuilder(builders);
    getProductDetailBuilder(builders);
  },
});

export const {
  setCurrentProduct,
  setCartProduct,
  addItemInWishlist,
  delteCartProduct,
  removeItemInWishlist,
} = productSlice.actions;

export default productSlice.reducer;
