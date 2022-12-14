import { useEffect, useState } from "react";

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollPositionHandler = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    scrollPositionHandler();
  }, []);

  document.addEventListener("scroll", scrollPositionHandler);

  return scrollPosition
}
