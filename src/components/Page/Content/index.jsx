import { useScrollDimensions } from "src/utils/window";

import { useRef } from "react";

import "./styles.css";

export default function Content({ children }) {
  const ref = useRef(null);
  const dimensions = useScrollDimensions(ref);
  const scrollClass =
    dimensions.scrollHeight > dimensions.clientHeight
      ? " Page__Content--Scrollable"
      : "";
  return (
    <div className={"Page__Content" + scrollClass} ref={ref}>
      {children}
    </div>
  );
}
