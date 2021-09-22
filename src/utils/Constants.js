const { getBaseUrl } = require("./Helper");

const constants = {
  base_path: "/",

  api_base_path: getBaseUrl(process.env.REACT_APP_ENVIRONMENT),

  local_api_path: "http://localhost:8080/api/",

  session_object: "LOGIN_SESSION",

  page_limit: 10,
};

export default constants;
