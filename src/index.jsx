import Wrapper from "src/components/Wrapper/index.jsx";
import * as Pages from "src/pages";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";

import "./global.css";

export const route2split = {
  "/": "Wind",
  "/reddit-nuker": "Earth",
  "/yin-yang": "Lake",
  "/archive": "Mountain",
};

function App() {
  return (
    <Wrapper>
      <Route index element={<Pages.Home />} />
      <Route path="/reddit-nuker" element={<Pages.RedditNuker />} />
      <Route path="/yin-yang" element={<Pages.YinYang />} />
      <Route path="/archive" element={<Pages.Archive />} />
    </Wrapper>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
