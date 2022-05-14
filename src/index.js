import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

axios.interceptors.request.use((request) => {
  request.headers.customHeader = "fooo";
  return request;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status !== 401) {
      console.log("error status is not 401");
    } else console.log("Error status is 401");
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
