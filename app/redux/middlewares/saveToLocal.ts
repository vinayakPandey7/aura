"use client";
import { persistConfig } from "@/app/config/persist.config";
import { REDUX_STATE } from "@/app/ts/constants/redux";
import { ReducerNames } from "@/app/ts/enum/redux";
import { Middleware } from "@reduxjs/toolkit";

// Middleware to encode and persist state
export const saveToLocal: Middleware<{}, any> =
  (store) => (dispatch) => (action) => {
    if (typeof localStorage !== "undefined") {
      const stateAfterAction = store.getState();
      let _persistedState: any = {};
      Object.entries(persistConfig).forEach(([key, value]) => {
        const reducerName = key as ReducerNames;
        _persistedState[reducerName] = {};

        Object.entries(value).forEach(([innerKey, innerValue]) => {
          const { isEncoded } = innerValue;

          if (isEncoded) {
            // _persistedState[reducerName][innerKey] = btoa(
            //   stateAfterAction[reducerName][innerKey]
            // );
          } else {
            // _persistedState[reducerName][innerKey] =
            //   stateAfterAction[reducerName][innerKey];
          }
        });
      });
      localStorage.setItem(REDUX_STATE, JSON.stringify(_persistedState));
    }

    return dispatch(action);
  };
