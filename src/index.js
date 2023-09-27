import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import orderReducer from './reducers/orderReducer'

import App from "./App";

const store = configureStore({
    reducer : {
        products: orderReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
