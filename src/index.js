import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./stores/configureStore";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./bootstrap-themes/litera.min.css";
import registerServiceWorker from "./registerServiceWorker";

const Main = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(Main, document.getElementById("root"));
registerServiceWorker();
