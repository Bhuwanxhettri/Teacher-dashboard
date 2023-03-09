import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="210694677263-drki6j90lg1e8bagjmhemskdm4fr7sdd.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
