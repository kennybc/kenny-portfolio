import { useNavigate } from "react-router-dom";

import "../styles/BackButton.css";

function BackButton() {
  let navigate = useNavigate();
  return (
    <div
      className="back-button"
      onClick={() => {
        navigate(-1);
      }}
    >
      <i className="back-icon">&#8249;</i> Back
    </div>
  );
}

export default BackButton;
