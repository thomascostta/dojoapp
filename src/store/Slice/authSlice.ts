import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    stepForgotPassword: "first",
    userVisibility: "login",
    stepCreateNewUser: "first",
  },
  reducers: {
    setStepForgotPassword: (state, action) => {
      state.stepForgotPassword = action.payload;
    },
    setUserVisibility: (state, action) => {
      state.userVisibility = action.payload;
    },
    setStepCreateNewUser: (state, action) => {
      state.stepCreateNewUser = action.payload;
    },
  },
});

export const {
  setStepForgotPassword,
  setUserVisibility,
  setStepCreateNewUser,
} = authSlice.actions;
export default authSlice.reducer;
