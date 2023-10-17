import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/home.js";
import MotorDebate from "./pages/motordebate.js";
import WriterJS from "./pages/writerjs.js";
import NFTEscrow from "./pages/nftescrow.js";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="motordebate" element={<MotorDebate />} />
      <Route path="writerjs" element={<WriterJS />} />
      <Route path="nftescrow" element={<NFTEscrow />} />
    </Routes>
  </BrowserRouter>
);
