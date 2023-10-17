import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './styles/home.css';
import Home from "./pages/home.js"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
