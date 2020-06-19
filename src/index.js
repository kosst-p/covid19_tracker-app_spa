import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { YMInitializer } from "react-yandex-metrika";

ReactDOM.render(
  <>
    <YMInitializer
      accounts={[65008369]}
      options={{ webvisor: true }}
      version="2"
    />
    <App />
  </>,
  document.querySelector("#root")
);
