import { combineReducers } from "redux";
import AuthReducer from "../pages/auth/redux/reducer";
const reducers = () =>
  combineReducers({
    Auth: AuthReducer,
  });

export default reducers;
