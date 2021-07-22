import React from "react";
import StoreProvider from "./store/StoreProvider";
import "./App.scss";

const App = () => (
  <StoreProvider>
    <header>hello world!!</header>
  </StoreProvider>
);

export default App;
