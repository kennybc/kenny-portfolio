import { useEffect, useLayoutEffect, useState } from "react";

/*
 * scroll dimensions hook
 */
function getScrollDimensions(ref) {
  /*
   * if it's already scrollable, there is an injected padding
   * that adds to the height this padding needs to be ignored
   *  when deciding whether or not to revoke scrollability
   */
  let offset = 0;
  if (ref.classList.contains("PageContent--Scrollable")) {
    offset = ref.scrollHeight / 3;
  }
  return {
    clientHeight: ref.clientHeight,
    scrollHeight: ref.scrollHeight - offset,
  };
}
export const useScrollDimensions = (ref) => {
  const [scrollDimensions, setScrollDimensions] = useState({
    clientHeight: 0,
    scrollHeight: 0,
  });

  useLayoutEffect(() => {
    function handleResize() {
      setScrollDimensions(getScrollDimensions(ref.current));
    }
    setScrollDimensions(getScrollDimensions(ref.current));
    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
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
