import { ImGithub, ImLinkedin2, ImUserTie } from "react-icons/im";
import { Link } from "react-router-dom";

import "./styles.css";

const icons = [
  {
    icon: <ImUserTie />,
    url: "https://www.google.com/",
  },
  {
    icon: <ImLinkedin2 />,
    url: "https://www.linkedin.com/in/kennybc/",
  },
  {
    icon: <ImGithub />,
    url: "https://github.com/kennybc",
  },
];

export function Socials({ reverse }) {
  return (reverse ? icons.toReversed() : icons).map(function (icon, i) {
    return (
      <Link to={icon.url} target="_blank" rel="noopener noreferrer">
        <div key={i} className="Page__Tag Page__Social">
          {icon.icon}
        </div>
      </Link>
    );
  });
}

export function Tags({ tags, reverse }) {
  return (reverse ? tags.toReversed() : tags).map(function (tag, i) {
    return (
      <div key={i} className="Page__Tag">
        {tag}
      </div>
    );
  });
}
