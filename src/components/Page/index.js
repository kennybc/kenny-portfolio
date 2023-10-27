import { motion } from "framer-motion";
import routeVariants from "pages/routeVariants";

import PageContent from "./PageContent";
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
        <PageContent>{yang}</PageContent>
      </div>
      <div className="Yin">
        <div className="Yang__Lesser"></div>
        <PageContent>{yin}</PageContent>
      </div>
    </motion.div>
  );
}
