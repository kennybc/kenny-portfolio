import { getSplitDimensions } from "utils/trig";

import React, { useEffect, useState } from "react";

import "./styles.css";

export default function Split({ split, orientation }) {
  const splitDimensions = getSplitDimensions();

  return (
    <div
      className="Split"
      style={{
        width: splitDimensions.width,
        height: splitDimensions.height,
        marginTop: splitDimensions.offset,
      }}
    ></div>
  );
}
