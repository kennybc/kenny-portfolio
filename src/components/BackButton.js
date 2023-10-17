import { useNavigate } from "react-router-dom";

function BackButton() {
  let navigate = useNavigate();
  return (
    <button
      className="back"
      onClick={() => {
        navigate(-1);
      }}
    >
      &#8249; Back
    </button>
  );
}

export default BackButton;
