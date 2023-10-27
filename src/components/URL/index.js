import { FiLink2 } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

export default function URL({ to, newTab, children }) {
  return (
    <Link
      className="URL"
      to={to}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      <FiLink2 />
      {children}
    </Link>
  );
}
