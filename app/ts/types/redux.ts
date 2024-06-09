"use client";
import store from "@/app/redux/store";
import { ReducerNames } from "../enum/redux";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type ReduxState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type Slice = "USER_PRODUCT";

export type PersistConfig = {
  [key in ReducerNames]: {
    [key in string]: {
      isEncoded: boolean;
    };
  };
};
