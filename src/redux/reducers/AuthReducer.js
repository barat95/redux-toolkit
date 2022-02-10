import { createSlice } from "@reduxjs/toolkit";
import Constants from "../../utils/Constants";
import { getStorageData } from "../../utils/Helper";
const _ = require("lodash");

const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState: {
    loading: false,
    error: false,
    success: false,
    user: !_.isEmpty(localStorage.getItem(Constants.session_object))
      ? getStorageData(Constants.session_object)
      : null,
  },
  reducers: {
    loginSubmit: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
      state.success = action.payload.message;
      state.error = false;
    },
    loginError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
    logoutUser: (state) => {
      state.user = null;
      state.error = false;
      state.success = false;
    },
  },
});

export const { loginSubmit, loginSuccess, loginError, logoutUser } =
  AuthReducer.actions;

export default AuthReducer.reducer;
