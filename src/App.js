import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/configureStore";
import "./style.css";
import AppRouter from "./routers/AppRouter";
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search for Package</h1>
        <AppRouter />
      </div>
    </Provider>
  );
}
