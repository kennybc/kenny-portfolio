import { useScrollDimensions } from "utils/window";

import { useRef } from "react";

import "./styles.css";

export default function Page({ className, children }) {
  const ref = useRef();
  const dimensions = useScrollDimensions(ref);
  const scrollClass =
    dimensions.scrollHeight > dimensions.clientHeight
      ? " PageContent--Scrollable"
      : "";
  return (
    <div className={"PageContent " + className + scrollClass} ref={ref}>
      {children}
    </div>
  );
}
