import classNames from "classnames";
import useScrollPosition from "@/hooks/useScrollPosition";
import { useEffect, useMemo, useRef, useState } from "react";

export default function HomeSwitch(props, ref) {
  const switchRef = useRef()
  const [offsetTop, setOffsetTop] = useState()
  const scrollPosition = useScrollPosition()
  const isSwitchOnTop = useMemo(() => scrollPosition >= offsetTop, [scrollPosition])

  useEffect(() => {
    const {top, right, bottom, left} = switchRef.current.getBoundingClientRect()
    setOffsetTop(top);
  },[])

  return (
    <div className={classNames(
      "sticky top-0 p-5 w-full flex items-center justify-center transition-colors",{
        "bg-slate-700 rounded-b-xl bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg": isSwitchOnTop
      })} 
      ref={switchRef}
    >
      <button className="flex items-center justify-center gap-2 bg-dark p-2 rounded-full transition-colors">
        <span
          onClick={props.toggleLayout}
          className={classNames("py-1.5 px-4 rounded-full transition-colors", {
            "bg-indigo-500": !props.isMapLayout,
          })}
        >
          Şehir Listesi
        </span>
        <span
          onClick={props.toggleLayout}
          className={classNames("py-1.5 px-4 rounded-full transition-colors", {
            "bg-indigo-500": props.isMapLayout,
          })}
        >
          Harita
        </span>
      </button>
    </div>
  );
}