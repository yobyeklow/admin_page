import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    accessToken: null,
  },
  reducers: {
    userLogin(state, { payload }) {
      state.user = payload;
      state.accessToken = payload.accessToken;
    },
  },
});

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;
