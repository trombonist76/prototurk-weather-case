import React from "react";

export default function HomeNotFound(props) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 text-rose-600 font-bold tracking-wider rounded-lg outline-offset-4 p-8 px-16 outline-dashed outline-slate-500 outline-2">
      Aradığınız kriterlere uygun bir şehir bulunamadı!
      <button
        onClick={props.clearFilter}
        className="text-white text-sm font-medium p-2 px-4 bg-indigo-500 rounded-full hover:bg-indigo-300 transition-colors"
      >
        Filtreyi sıfırla
      </button>
    </div>
  );
}
