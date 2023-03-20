import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    isLoading: false,
  },
  reducers: {
    getProduct(state) {
      state.isLoading = true;
    },
    getProductSuccess(state, { payload }) {
      state.isLoading = false;
      state.product = payload;
    },
  },
});

export const { getProduct, getProductSuccess } = productSlice.actions;
export default productSlice.reducer;
