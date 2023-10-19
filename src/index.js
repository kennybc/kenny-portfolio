import { AnimatePresence } from "framer-motion";
import Home from "pages/Home/index.js";
import MotorDebate from "pages/MotorDebate/index.js";
import NFTEscrow from "pages/NFTEscrow/index.js";
import WriterJS from "pages/WriterJS/index.js";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import "./global.css";

function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="motordebate" element={<MotorDebate />} />
          <Route path="writerjs" element={<WriterJS />} />
          <Route path="nftescrow" element={<NFTEscrow />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
