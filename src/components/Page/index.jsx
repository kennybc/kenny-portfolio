import { motion } from "framer-motion";
import { PageContext } from "src/components/Wrapper";
import routeVariants from "src/pages/routeVariants.js";

import { useContext } from "react";

import Content from "./Content";
import { Socials, Tags } from "./Tags";
import "./styles.css";

export default function Page({ className, title, tags, yin, yang }) {
  const context = useContext(PageContext);
  tags = context.reverse ? tags.toReversed() : tags;
  return (
    <motion.div
      className={
        "Page" + (context.reverse ? " Page--Reverse" : "") + (" " + className)
      }
      variants={routeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="Yang">
        <div className="Yin__Lesser"></div>
        <div className="Page__Header">
          <h1 className="Page__Title">{title}</h1>
          <div className="Page__Tags">
            {tags && <Tags tags={tags} reverse={context.reverse} />}
            {!tags && <Socials reverse={context.reverse} />}
          </div>
        </div>
        <Content>{yang}</Content>
      </div>
      <div className="Yin">
        <div className="Yang__Lesser"></div>
        <Content>{yin}</Content>
      </div>
    </motion.div>
  );
}
