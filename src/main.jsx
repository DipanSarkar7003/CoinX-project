import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CoinContaxtProvider from "./context/CoinContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CoinContaxtProvider>
      <App />
    </CoinContaxtProvider>
  </React.StrictMode>
);
