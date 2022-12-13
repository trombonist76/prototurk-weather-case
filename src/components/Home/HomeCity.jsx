import React from "react";

export default function HomeCity(props) {
  return (
    <div
      onClick={() => props.selectCityHandler(props.city.id)}
      className="group transition-colors cursor-pointer flex items-center rounded-full border border-slate-600 p-2 text-center hover:bg-indigo-700"
    >
      <span className="flex items-center justify-center transition-colors font-semibold bg-indigo-700 rounded-full w-8 h-8 group-hover:text-indigo-700 group-hover:bg-white">
        {props.city.id}
      </span>
      <span className="text-center flex-1">{props.city.name}</span>
    </div>
  );
}
