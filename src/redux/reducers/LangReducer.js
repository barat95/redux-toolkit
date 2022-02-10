import { createSlice } from "@reduxjs/toolkit";
import { getStorageData, setStorageData } from "../../utils/Helper";
const _ = require("lodash");

const LangReducer = createSlice({
  name: "LangReducer",
  initialState: {
    locale: !_.isEmpty(localStorage.getItem("lang"))
      ? getStorageData("lang")
      : setStorageData("lang", "en"),
  },
  reducers: {
    defaultLang: (state, action) => {
      state.locale = action.payload.locale;
    },
  },
});

export const { defaultLang } = LangReducer.actions;

export default LangReducer.reducer;
