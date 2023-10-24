import { motion } from "framer-motion";
import routeVariants from "pages/routeVariants";

import "./styles.css";

export default function Page({ className, title, yin, yang }) {
  return (
    <motion.div
      className={"Page " + className}
      variants={routeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="Yang">
        <div className="Yang__Slant"></div>
        <div className="Yang__Content">
          <h1>{title}</h1>
          {yang}
        </div>
      </div>
      <div className="Yin">
        <div className="Yin__Content">{yin}</div>
        <div className="Yin__Slant"></div>
      </div>
    </motion.div>
  );
}
