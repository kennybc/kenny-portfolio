import "./styles.css";

export default function Image({ className, src, alt, caption = alt }) {
  return (
    <div className={"Image " + (className ?? "")}>
      <div className="Image__Wrapper">
        <img className="Image__Source" src={src} alt={alt} />
        <span className="Image__Caption">{caption}</span>
      </div>
    </div>
  );
}
