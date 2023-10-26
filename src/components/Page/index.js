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
        <div className="Yin__Lesser"></div>
        <h1 className="Page__Title">{title}</h1>
        <div className="Page__Content">{yang}</div>
      </div>
      <div className="Yin">
        <div className="Yang__Lesser"></div>
        <div className="Page__Content">{yin}</div>
      </div>
    </motion.div>
  );
}
