import { useEffect, useState } from "react";

/*
 * scroll dimensions hook
 */
function getScrollDimensions(ref) {
  if (ref === undefined || ref.current === undefined) {
    return { clientHeight: 0, scrollHeight: 0 };
  }
  /*
   * if it's already scrollable, there is an injected padding
   * that adds to the height this padding needs to be ignored
   *  when deciding whether or not to revoke scrollability
   */
  let offset = 0;
  if (ref.current.classList.contains("PageContent--Scrollable")) {
    offset = ref.current.scrollHeight / 3;
  }
  return {
    clientHeight: ref.current.clientHeight,
    scrollHeight: ref.current.scrollHeight - offset,
  };
}
export const useScrollDimensions = (ref) => {
  const [scrollDimensions, setScrollDimensions] = useState(
    getScrollDimensions(ref),
  );

  useEffect(() => {
    function handleResize() {
      setScrollDimensions(getScrollDimensions(ref));
    }

    setScrollDimensions(getScrollDimensions(ref));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
