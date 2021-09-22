import { call, put, takeLatest } from "redux-saga/effects";
import { login } from "../../Services/apiRoutes";
import { loginSuccess, loginError, loginSubmit } from "../reducers/AuthReducer";
import axiosApiInstance from "../../Services/HttpRequest";
import { setStorageData } from "../../utils/Helper";
import Constants from "../../utils/Constants";

function* LoginSubmit(action) {
  try {
    const response = yield call(
      axiosApiInstance.post,
      login.url,
      action.payload
    );
    let user = response.data.data;
    setStorageData(Constants.session_object, user);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginError(error.response.data));
  }
}

function* userSaga() {
  yield takeLatest(loginSubmit.type, LoginSubmit);
}

export default userSaga;
