import { UserProductSlice } from "../ts/interface/redux";
import { REDUX_STATE } from "../ts/constants/redux";
import { Slice } from "../ts/types/redux";

export const isEmpty = (obj: any) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

const isObjectBase64Encoded = (str: any) => {
  try {
    return btoa(atob(str)) === str;
  } catch (e) {
    return false;
  }
};

export const getStoredState = (
  reducerName: Slice,
  initialState: UserProductSlice
): UserProductSlice | undefined => {
  if (typeof localStorage !== "undefined") {
    const _reduxState = JSON.parse(localStorage.getItem(REDUX_STATE) || "{}");

    if (!isEmpty(_reduxState) ) {
      const _reducer = _reduxState[reducerName];
      let _decryptedData: any;
      if (_reducer) {
        _decryptedData = Object.keys(_reducer).reduce((acc: any, key) => {
          const _isEncoded = isObjectBase64Encoded(_reducer[key]);

          if (_isEncoded) {
            acc[key] = atob(_reducer[key]);
          } else {
            acc[key] = _reducer[key];
          }

          return acc;
        }, {});
      }
      return { ...initialState, ..._decryptedData };
    }
  }
  return undefined;
};
