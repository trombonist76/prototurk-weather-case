import classNames from "classnames";
import { useState } from "react";

export default function HomeSwitch() {
  const [showMap, setShowMap] = useState(false);
  const optionClass = classNames("px-3", "bg-indigo-400");

  const toggleMap = () => {
    setShowMap(!showMap)
  }
  return (
    <div>
      <button className="flex items-center justify-center gap-2 bg-dark p-2 rounded-full transition-colors">
        <span onClick={toggleMap} className={classNames("py-1.5 px-4 rounded-full transition-colors", { "bg-indigo-500": !showMap })}>
          Şehir Listesi
        </span>
        <span onClick={toggleMap} className={classNames("py-1.5 px-4 rounded-full transition-colors", { "bg-indigo-500": showMap })}>
          Harita
        </span>
      </button>
    </div>
  );
}
