import useWindowDimensions from "./window";

export function getSplitDimensions(theta) {
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
