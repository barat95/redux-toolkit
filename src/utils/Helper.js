const _ = require("lodash");
const secretKey = "app.YOUR_APP_NAME753"; // Any secret key you wish to use to protect your user (encrypt user object) object on browser
const CryptoJS = require("crypto-js");

export const devLog = (message, params) => {
  if (
    process.env.NODE_ENV === "development" ||
    process.env.NODE_ENV === "dev"
  ) {
    console.log(message, params);
  }
  return;
};

export const sendFormData = (event, formValues = null) => {
  event.preventDefault();
  const data = new FormData(event.target);
  let values = Object.fromEntries(data.entries());
  let finalObj;
  if (formValues !== null) {
    finalObj = { ...formValues, ...values };
    return finalObj;
  } else {
    return values;
  }
};

export const getStorageData = (key) => {
  let data = _.isEmpty(localStorage.getItem(key))
    ? {}
    : localStorage.getItem(key);
  // Decrypt
  if (data.length) {
    let bytes = CryptoJS.AES.decrypt(data, secretKey);
    let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return _.isEmpty(decryptedData) ? {} : decryptedData;
  }
};

export const setStorageData = (key, value) => {
  // Encrypt
  let ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(value),
    secretKey
  ).toString();
  localStorage.setItem(key, ciphertext);
};

export const getBaseUrl = (env) => {
  if (env === "qa") {
    return "url here for api calls"; // QA Build URL for API Calls
  } else if (env === "prod") {
    return "url here for api calls"; // PROD Build URL for API CAlls
  } else {
    return "url here for api calls"; // Default
  }
};
