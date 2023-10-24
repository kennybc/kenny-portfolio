import Split from "components/Split";
import { AnimatePresence } from "framer-motion";
import { useWindowDimensions } from "utils/window";

import { useEffect, useState } from "react";
import { Routes, useLocation } from "react-router-dom";

import "./styles.css";

export default function Wrapper({ children }) {
  const location = useLocation();
  const route2split = {
    "/": "Lake",
    "/nftescrow": "Wind",
  };
  const [split, setSplit] = useState(route2split[location.pathname]);
  const windowDimensions = useWindowDimensions();
  const orientation =
    windowDimensions.width > windowDimensions.height ? "Landscape" : "Portrait";

  useEffect(() => {
    setSplit(route2split[location.pathname]);
    console.log(split);
  }, [location]);

  return (
    <div className={"Wrapper Wrapper--" + orientation + " Wrapper--" + split}>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Routes location={location} key={location.pathname}>
          {children}
        </Routes>
      </AnimatePresence>
      <Split split={split} orientation={orientation} />
    </div>
  );
}
