import { useScrollDimensions } from "utils/window";

import { useEffect, useRef, useState } from "react";

import "./styles.css";

export default function Page({ children }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);
  const dimensions = useScrollDimensions(ref);
  console.log(dimensions);
  const scrollClass =
    dimensions.scrollHeight > dimensions.clientHeight
      ? " PageContent--Scrollable"
      : "";
  return (
    <div
      className={"PageContent" + scrollClass}
      ref={ref}
      onLoad={() => {
        console.log("loaded");
      }}
    >
      {children}
    </div>
  );
}
