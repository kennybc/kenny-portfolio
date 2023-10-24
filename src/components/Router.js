import Split from "components/Split";
import { AnimatePresence } from "framer-motion";

import { Routes, useLocation } from "react-router-dom";

export default function Router({ children }) {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Routes location={location} key={location.pathname}>
          {children}
        </Routes>
      </AnimatePresence>
      <Split />
    </div>
  );
}
