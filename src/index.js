import Router from "components/Router";
import * as Pages from "pages";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";

import "./global.css";

function App() {
  return (
    <Router>
      <Route index element={<Pages.Home />} />
      <Route path="motordebate" element={<Pages.MotorDebate />} />
      <Route path="writerjs" element={<Pages.WriterJS />} />
      <Route path="nftescrow" element={<Pages.NFTEscrow />} />
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
