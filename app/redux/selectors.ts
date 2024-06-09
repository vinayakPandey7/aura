import { ReduxState } from "../ts/types/redux";

export const Selectors = {
  USER_PRODUCT: {
    PRODUCT_LIST: (state: ReduxState) => state.PRODUCT.productList,
    CART_PRODUCT: (state: ReduxState) => state.PRODUCT.cartData,
    CURRENT_PRODUCT: (state: ReduxState) => state.PRODUCT.currentProduct,
    WISHLIST_PRODUCT: (state: ReduxState) => state.PRODUCT.wishlist,
    PRODUCT_DETAIL: (state: ReduxState) => state.PRODUCT.productDetail,
  },
};
