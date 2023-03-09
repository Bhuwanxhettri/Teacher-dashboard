import actions from "./actions";

const initialState = {
  loading: false,
  isLoggedIn: false,
  token: null,
  message: "",
  statusCode: null,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_REQ:
      return {
        ...state,
        loading: false,
      };
    case actions.USER_LOGIN_SUC:
      return {
        ...state,
        loading: false,
        isLoggedIn: action.isLoggedIn,
        message: action.message,
        statusCode: action.statusCode,
        token: action.token,
      };

    case actions.USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        statusCode: action.statusCode,
        message: action.message,
      };

    case actions.GET_TOKEN_FROM_LS_REQ:
      return {
        ...state,
        loading: false,
      };
    case actions.GET_TOKEN_FROM_LS_SUC:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        message: action.message,
        statusCode: action.statusCode,
        token: action.token,
        loading: false,
      };

    case actions.GET_TOKEN_FROM_LS_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actions.USER_LOGOUT_REQ: {
      return {
        ...state,
        loading: false,
      };
    }
    case actions.USER_LOGOUT_SUC: {
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        currentUser: null,
        token: null,
        message: "",
      };
    }
    case actions.USER_LOGOUT_FAIL: {
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
      };
    }

    default:
      return { ...state };
  }
};

export default Auth;
