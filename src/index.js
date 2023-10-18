import Home from "pages/Home/Home.js";
import MotorDebate from "pages/Projects/MotorDebate/MotorDebate.js";
import NFTEscrow from "pages/Projects/NFTEscrow/NFTEscrow.js";
import WriterJS from "pages/Projects/WriterJS/WriterJS.js";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="motordebate" element={<MotorDebate />} />
      <Route path="writerjs" element={<WriterJS />} />
      <Route path="nftescrow" element={<NFTEscrow />} />
    </Routes>
  </BrowserRouter>,
);
