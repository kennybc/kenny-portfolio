import Split from "components/Split";
import { AnimatePresence } from "framer-motion";
import { route2split } from "index.js";
import { getSlantDimensions } from "utils/trig";
import { useWindowDimensions } from "utils/window";

import { useState } from "react";
import { Routes, useLocation } from "react-router-dom";

import "./styles.css";

export default function Wrapper({ children }) {
  const location = useLocation();
  const [split, setSplit] = useState(route2split[location.pathname]);
  const windowDimensions = useWindowDimensions();
  const orientation =
    windowDimensions.width > windowDimensions.height ? "Landscape" : "Portrait";

  const slantDimensions = getSlantDimensions(split, orientation);

  return (
    <div
      className={
        "Wrapper " + (slantDimensions.reverse ? "Wrapper--Reverse" : "")
      }
      style={{
        "--theta": `${slantDimensions.theta}deg`,
        "--slant-width": `${slantDimensions.width}vh`,
      }}
    >
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => setSplit(route2split[location.pathname])}
      >
        <Routes location={location} key={location.pathname}>
          {children}
        </Routes>
      </AnimatePresence>
      <Split split={split} orientation={orientation} />
    </div>
  );
}
