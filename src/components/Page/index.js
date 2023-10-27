import { motion } from "framer-motion";
import routeVariants from "pages/routeVariants";

import PageContent from "./PageContent";
import "./styles.css";

export default function Page({ className, title, subtitle, yin, yang }) {
  return (
    <motion.div
      className={"Page " + (className ?? "")}
      variants={routeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="Yang">
        <div className="Yin__Lesser"></div>
        <div className="Page__Header">
          <h1 className="Page__Title">{title}</h1>
          {subtitle && <h2 className="Page__Subtitle">{subtitle}</h2>}
        </div>
        <PageContent>{yang}</PageContent>
      </div>
      <div className="Yin">
        <div className="Yang__Lesser"></div>
        <PageContent>{yin}</PageContent>
      </div>
    </motion.div>
  );
}
