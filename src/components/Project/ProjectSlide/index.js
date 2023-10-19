import "./ProjectSlide.css";

export default function ProjectSlide({ title, background }) {
  return (
    <div
      className="ProjectSlide"
      style={{
        backgroundImage: "url(" + background + ")",
      }}
    >
      <span className="ProjectSlide__Title">{title}</span>
    </div>
  );
}
