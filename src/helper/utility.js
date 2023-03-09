const localStorage = window.localStorage;

export function clearToken() {
  localStorage.removeItem("access_token");
}

function getTokenFromStorage(token = "access_token") {
  return localStorage.getItem(token);
}

export function getToken(token = "access_token") {
  try {
    return getTokenFromStorage(token);
  } catch (err) {
    clearToken();
    return {};
  }
}

export function getBearerToken() {
  if (getToken()) {
    return "Bearer " + getToken();
  }
  return false;
}

export const delay = (ms, value) =>
  new Promise((res) => setTimeout(res(value), ms));
