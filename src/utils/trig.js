import { useWindowDimensions } from "./window";

export function getSplitDimensions() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const a = windowHeight / 2;
  const b = windowWidth / 2;
  const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  return {
    width: c,
    height: 2 * c,
    offset: -c + a,
  };
}

const skew = 5;
const split2theta = {
  Mountain: -skew,
  Earth: 0,
  Thunder: skew,
  Lake: 180 - skew,
  Heaven: 180,
  Wind: 180 + skew,
};

export function getSlantDimensions(split, orientation) {
  const theta = split2theta[split];
  const offset = orientation === "Landscape" ? 0 : 90;
  const rad = ((theta + 90) * Math.PI) / 180;
  const reverse = theta < 90;
  return {
    theta: theta + offset,
    width: Math.abs(Math.cos(rad)) * 50,
    reverse,
  };
}
