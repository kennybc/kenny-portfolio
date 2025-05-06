import { ImGithub, ImLinkedin2, ImUserTie } from "react-icons/im";
import { Link } from "react-router-dom";

import "./styles.css";

const socials = [
  {
    icon: <ImUserTie />,
    url: "resume.pdf",
    label: "View my resume",
  },
  {
    icon: <ImLinkedin2 />,
    url: "https://www.linkedin.com/in/kennybc/",
    label: "View my LinkedIn profile",
  },
  {
    icon: <ImGithub />,
    url: "https://github.com/kennybc",
    label: "View my Github profile",
  },
];

export function Socials({ reverse }) {
  return (reverse ? socials.toReversed() : socials).map(function (social, i) {
    return (
      <Link
        key={i}
        to={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
      >
        <div key={i} className="Page__Tag Page__Social">
          {social.icon}
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
