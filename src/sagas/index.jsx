import { all } from "redux-saga/effects";
/**
 * All the sagas will be registerd in this root saga
 */
import authSaga from "../pages/auth/redux/saga";
export default function* rootSagas() {
  yield all([authSaga()]);
}
