import Wrapper from "components/Wrapper";
import * as Pages from "pages";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";

import "./global.css";

export const route2split = {
  "/": "Wind",
  "/yin-yang": "Mountain",
};

function App() {
  return (
    <Wrapper>
      <Route index element={<Pages.Home />} />
      <Route path="/yin-yang" element={<Pages.YinYang />} />
    </Wrapper>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
