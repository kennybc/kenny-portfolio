import BackButton from "../BackButton/BackButton";
import "./ProjectBanner.css";

export default function Banner({ text, background }) {
  return (
    <div
      className="ProjectBanner"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url(" +
          background +
          ")",
      }}
    >
      <div className="content">
        <BackButton />
        <span id="greeting">{text}</span>
      </div>
    </div>
  );
}
