const entities = "[auth]";

const actions = {
  USER_LOGIN_REQ: `${entities} USER_LOGIN_REQ`,
  USER_LOGIN_SUC: `${entities} USER_LOGIN_SUC`,
  USER_LOGIN_FAIL: `${entities} USER_LOGIN_FAIL`,

  USER_LOGOUT_REQ: `${entities} USER_LOGOUT_REQ`,
  USER_LOGOUT_SUC: `${entities} USER_LOGOUT_SUC`,
  USER_LOGOUT_FAIL: `${entities} USER_LOGOUT_FAIL`,

  login: (payload) => ({
    type: actions.USER_LOGIN_REQ,
    payload,
  }),

  logout: () => ({
    type: actions.USER_LOGOUT_REQ,
  }),
};

export default actions;
