import AuthReducer from "./AuthReducer";
import LangReducer from "./LangReducer";
import { combineReducers } from "@reduxjs/toolkit";

const allReducers = combineReducers({
  AuthReducer: AuthReducer,
  LangReducer: LangReducer,
});

export default allReducers;
