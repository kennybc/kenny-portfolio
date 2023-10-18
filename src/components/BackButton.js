import { useNavigate } from "react-router-dom";

import "../styles/BackButton.css";

function BackButton() {
  let navigate = useNavigate();
  return (
    <div
      className="BackButton"
      onClick={() => {
        navigate(-1);
      }}
    >
      <i className="BackButton__Icon">&#8249;</i> Back
    </div>
  );
}

export default BackButton;
