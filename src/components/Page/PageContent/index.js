import { useScrollDimensions } from "utils/window";

import { useRef } from "react";

import "./styles.css";

export default function Page({ children }) {
  const ref = useRef(null);
  const dimensions = useScrollDimensions(ref);
  const scrollClass =
    dimensions.scrollHeight > dimensions.clientHeight
      ? " PageContent--Scrollable"
      : "";
  console.log(dimensions);
  return (
    <div className={"PageContent" + scrollClass} ref={ref}>
      {children}
    </div>
  );
}
