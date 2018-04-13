import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./styles/styles.scss";

window.addEventListener("dragover",function(e){
  e.preventDefault();
},false);
window.addEventListener("drop",function(e){
  e.preventDefault();
},false);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
