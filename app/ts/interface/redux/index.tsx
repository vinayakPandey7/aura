export interface UserProductSlice {
  currentProduct: any;
  cartData: CartData;
  wishlist: any[];
  productList: any;
  productDetail: any;
}

export interface CartData {
  cartTotalPrice: number;
  cartTotalPriceSaved?: number;
  cartProducts: any[];
}
