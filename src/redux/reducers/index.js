import AuthReducer from "./AuthReducer";
import { combineReducers } from "@reduxjs/toolkit";

const allReducers = combineReducers({
  AuthReducer: AuthReducer,
});

export default allReducers;
