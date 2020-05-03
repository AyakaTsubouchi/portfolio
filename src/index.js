import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "./components/Context";
import { contextProvider } from "./components/Context2";

ReactDOM.render(
  <Provider>
    <contextProvider>
      <App />
    </contextProvider>
  </Provider>,
  document.getElementById("root")
);
