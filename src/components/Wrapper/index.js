import { AnimatePresence } from "framer-motion";
import { route2split } from "index.js";
import { getSlantDimensions, getSplitDimensions } from "utils/trig";
import { useWindowDimensions } from "utils/window";

import { createContext, useState } from "react";
import { Routes, useLocation } from "react-router-dom";

import "./styles.css";

export const PageContext = createContext();

function Split({ theta }) {
  const splitDimensions = getSplitDimensions();

  return (
    <div
      className="Split"
      style={{
        width: splitDimensions.width,
        height: splitDimensions.height,
        marginTop: splitDimensions.offset,
        rotate: `${theta}deg`,
      }}
    ></div>
  );
}

export default function Wrapper({ children }) {
  const location = useLocation();
  const [split, setSplit] = useState(route2split[location.pathname]);
  const windowDimensions = useWindowDimensions();
  const orientation =
    windowDimensions.width > windowDimensions.height ? "Landscape" : "Portrait";

  const slantDimensions = getSlantDimensions(split, orientation);
  const context = {
    reverse: slantDimensions.reverse,
  };

  return (
    <PageContext.Provider value={context}>
      <div
        className={
          "Wrapper " + (slantDimensions.reverse ? "Wrapper--Reverse" : "")
        }
        style={{
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
        <Split theta={slantDimensions.theta} />
      </div>
    </PageContext.Provider>
  );
}
