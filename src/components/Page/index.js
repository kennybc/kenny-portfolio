import { motion } from "framer-motion";
import routeVariants from "pages/routeVariants";

import { FiFile, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import PageContent from "./PageContent";
import "./styles.css";

const icons = [
  {
    icon: <FiFile />,
    url: "test.com",
  },
  {
    icon: <FiLinkedin />,
    url: "test2.com",
  },
  {
    icon: <FiGithub />,
    url: "test2.com",
  },
  {
    icon: <FiMail />,
    url: "test2.com",
  },
];

export default function Page({ className, title, tags, socials, yin, yang }) {
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
          {(tags || socials) && (
            <div className="Page__Tags">
              {tags &&
                tags.map(function (tag) {
                  return <div className="Page__Tag">{tag}</div>;
                })}
              {socials &&
                icons.map(function (icon) {
                  return <div className="Page__Tag">{icon.icon}</div>;
                })}
            </div>
          )}
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
