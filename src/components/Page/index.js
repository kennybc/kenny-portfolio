import { PageContext } from "components/Wrapper";
import { motion } from "framer-motion";
import routeVariants from "pages/routeVariants";

import { useContext } from "react";
import { ImGithub, ImLinkedin2, ImUserTie } from "react-icons/im";

import Content from "./Content";
import "./styles.css";

const icons = [
  {
    icon: <ImUserTie />,
    url: "resume.com",
  },
  {
    icon: <ImLinkedin2 />,
    url: "linkedin.com",
  },
  {
    icon: <ImGithub />,
    url: "github.com",
  },
];

export default function Page({ className, title, tags, yin, yang }) {
  const context = useContext(PageContext);
  tags = context.reverse ? tags.toReversed() : tags;
  return (
    <motion.div
      className={
        "Page" +
        (context.reverse ? " Page--Reverse" : "") +
        (" " + className ?? "")
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
            {tags &&
              tags.map(function (tag, i) {
                return (
                  <div key={i} className="Page__Tag">
                    {tag}
                  </div>
                );
              })}
            {!tags &&
              icons.map(function (icon, i) {
                return (
                  <div key={i} className="Page__Tag">
                    {icon.icon}
                  </div>
                );
              })}
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
