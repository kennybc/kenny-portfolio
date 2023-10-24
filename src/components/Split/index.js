import { getSplitDimensions } from "utils/trig";

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./styles.css";

export default function Split({ className, children }) {
  const location = useLocation();
  const splits = {
    "/home": "Lake",
    "/nftescrow": "Mountain",
  };
  const {
    width: splitWidth,
    height: splitHeight,
    offset: splitOffset,
  } = getSplitDimensions();
  const [split, setSplit] = useState(
    splits[location.pathname] ?? splits["/home"],
  );

  useEffect(() => {
    setSplit(splits[location.pathname] ?? splits["/home"]);
  }, [location]);

  return (
    <div
      className={"Split Split--" + split}
      style={{
        width: splitWidth,
        height: splitHeight,
        marginTop: splitOffset,
      }}
    ></div>
  );
}
