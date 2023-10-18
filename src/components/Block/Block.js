import "./Block.css";

export default function Block({ className, children }) {
  return (
    <div className={`Block ${className}`}>
      <div className="Block__Content">{children}</div>
    </div>
  );
}
