import { Redirect } from "react-router-dom";
import store from "../redux/store";
import { logoutUser } from "../redux/reducers/AuthReducer";
const axios = require("axios");
const axiosApiInstance = axios.create();

export const setToken = (key, token) => {
  if (token) {
    //applying token
    axiosApiInstance.defaults.headers.common[key] = token;
  } else {
    //deleting the token from header
    delete axiosApiInstance.defaults.headers.common[key];
  }
};

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      store.dispatch(logoutUser());
      localStorage.clear();
      return <Redirect exact to={"/"} />;
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
