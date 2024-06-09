import { ReducerNames } from "../ts/enum/redux";

export const persistConfig = {
  [ReducerNames.USER_PRODUCT]: {
    currentProduct: {
      isEncoded: false,
    },
    cartProducts: {
      isEncoded: false,
    },
  },
};
