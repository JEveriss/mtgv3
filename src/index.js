import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import mixpanel from "mixpanel-browser";

const root = ReactDOM.createRoot(document.getElementById("root"));
mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, {
  debug: process.env.NODE_ENV === "development",
});

root.render(
  <App />
);

reportWebVitals();
