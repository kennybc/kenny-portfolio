import Split from "components/Split";
import { AnimatePresence } from "framer-motion";
import * as Pages from "pages";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./global.css";

function App() {
  return (
    <div>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Routes location={location} key={location.pathname}>
          <Route index element={<Pages.Home />} />
          <Route path="motordebate" element={<Pages.MotorDebate />} />
          <Route path="writerjs" element={<Pages.WriterJS />} />
          <Route path="nftescrow" element={<Pages.NFTEscrow />} />
        </Routes>
      </AnimatePresence>
      <Split />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
