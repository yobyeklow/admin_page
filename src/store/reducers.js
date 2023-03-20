import { combineReducers } from "@reduxjs/toolkit";

import userSlice from "./user/userState";
import productSlice from "./products/productState";
export const reducers = combineReducers({
  user: userSlice,
  product: productSlice,
});
