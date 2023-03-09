import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { push } from "connected-react-router";

import actions from "./actions";
import { authLoginApi } from "../../../api";

function* callUserLoginReq(action) {
  try {
    const response = yield call(authLoginApi, action.payload);
    yield put({
      type: actions.USER_LOGIN_SUC,
      statusCode: response.status,
      message: "Login  Successfull.",
      token: response.data.access_token,
      isLoggedIn: true,
    });
    localStorage.setItem("access_token", response.data.access_token);
    yield put(push("/dashboard"));
  } catch (error) {
    console.log(error);
  }
}

function* callUserLogoutReq() {
  try {
    yield put({ type: actions.USER_LOGOUT_SUC, message: "" });
  } catch (error) {
    const message = "SOMETHING WENT WRONG. cant logout.";
    const status = error?.response.data?.error?.message || 502;
    yield put({
      type: actions.USER_LOGOUT_FAIL,
      message,
      status,
    });
  } finally {
    // ShowMessage(data);
    // yield put(push("/login"));
    //Remove the tokens
    localStorage.removeItem("access_token");
  }
}

export function* userLogin() {
  yield takeLatest(actions.USER_LOGIN_REQ, callUserLoginReq);
}

export function* userLogout() {
  yield takeEvery(actions.USER_LOGOUT_REQ, callUserLogoutReq);
}

export default function* authSaga() {
  yield all([fork(userLogin), fork(userLogout)]);
}
