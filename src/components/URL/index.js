import { FiLink2 } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./styles.css";

export default function URL({ to, children }) {
  return (
    <Link className="URL" to={to}>
      <FiLink2 />
      {children}
    </Link>
  );
}
