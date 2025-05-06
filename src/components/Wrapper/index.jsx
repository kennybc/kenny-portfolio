import { AnimatePresence } from "framer-motion";
import { route2split } from "src/index.jsx";
import { getSlantDimensions, getSplitDimensions } from "src/utils/trig.js";
import { useWindowDimensions } from "src/utils/window.js";

import { createContext, useEffect, useState } from "react";
import { Routes, useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [split, setSplit] = useState(route2split[location.pathname]);
  const windowDimensions = useWindowDimensions();
  const orientation =
    windowDimensions.width > windowDimensions.height ? "Landscape" : "Portrait";

  const slantDimensions = getSlantDimensions(split, orientation);
  const context = {
    split: split,
    reverse: slantDimensions.reverse,
    orientation: orientation,
  };

  useEffect(() => {
    if (!(location.pathname in route2split)) {
      navigate("/");
    }
  }, [location.pathname]);

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
        {orientation == "Landscape" ? (
          <Split theta={slantDimensions.theta} />
        ) : null}
      </div>
    </PageContext.Provider>
  );
}
