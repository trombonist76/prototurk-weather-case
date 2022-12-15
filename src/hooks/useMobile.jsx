import { useEffect, useState } from "react";

function getIsMobile() {
  const mobilePx = 768;
  const isMobile = mobilePx > window.innerWidth;
  return isMobile;
}

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    
    function handleResize() {
      setIsMobile(getIsMobile());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return isMobile;
}
