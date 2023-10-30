import { useEffect, useLayoutEffect, useState } from "react";

/*
 * scroll dimensions hook
 */
/*function getScrollDimensions(ref) {
  let offset = 0;
  if (ref.classList.contains("PageContent--Scrollable")) {
    offset = ref.scrollHeight / 3;
  }
  return {
    clientHeight: ref.clientHeight,
    scrollHeight: ref.scrollHeight - offset,
  };
}*/
export const useScrollDimensions = (ref) => {
  const [scrollDimensions, setScrollDimensions] = useState({
    clientHeight: 0,
    scrollHeight: 0,
  });

  useLayoutEffect(() => {
    function measure() {
      setScrollDimensions({
        clientHeight: ref.current.clientHeight,
        scrollHeight: ref.current.scrollHeight,
      });
    }
    measure();
    window.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return scrollDimensions;
};

/*
 * window dimensions hook
 */
function getWindowDimensions() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}
export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
