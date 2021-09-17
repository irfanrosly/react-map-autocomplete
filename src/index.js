import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { LoadScript } from "@react-google-maps/api";
import store from "./redux/store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
        <App />
      </LoadScript>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
