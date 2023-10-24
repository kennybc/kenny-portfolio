import { getSplitDimensions } from "utils/trig";

import { useLocation } from "react-router-dom";

import "./styles.css";

export default function Split({ className, children }) {
  const location = useLocation();
  const {
    width: splitWidth,
    height: splitHeight,
    offset: splitOffset,
  } = getSplitDimensions();
  return (
    <div
      className="Split"
      style={{
        width: splitWidth,
        height: splitHeight,
        marginTop: splitOffset,
      }}
    ></div>
  );
}
