import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import React from "react";

const element = document.getElementById("root");

const root = ReactDOM.createRoot(element);

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
