import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main.js";
import { Provider } from "react-redux";
import store from "./store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
        <Main />
    </BrowserRouter>
  </Provider>
);