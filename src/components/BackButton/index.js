import { Link, useNavigate } from "react-router-dom";

import "./BackButton.css";

function BackButton() {
  let navigate = useNavigate();
  return (
    <Link className="BackButton" to="/">
      <i className="BackButton__Icon">&#8249;</i> Back
    </Link>
  );
}

export default BackButton;
