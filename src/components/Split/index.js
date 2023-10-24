import { getSplitDimensions } from "utils/trig";
import { useWindowDimensions } from "utils/window";

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./styles.css";

export default function Split() {
  const location = useLocation();
  const route2split = {
    "/": "Lake",
    "/nftescrow": "Heaven",
  };
  const [split, setSplit] = useState(route2split[location.pathname]);

  const splitDimensions = getSplitDimensions();
  const windowDimensions = useWindowDimensions();
  const orientation =
    windowDimensions.width > windowDimensions.height ? "Landscape" : "Portrait";

  useEffect(() => {
    setSplit(route2split[location.pathname]);
    console.log(split);
  }, [location]);

  return (
    <div
      className={"Split Split--" + split + " Split--" + orientation}
      style={{
        width: splitDimensions.width,
        height: splitDimensions.height,
        marginTop: splitDimensions.offset,
      }}
    ></div>
  );
}
