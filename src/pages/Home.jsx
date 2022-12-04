import cities from "@/assets/data/cities.json";
import HomeSwitch from "@/components/Home/HomeSwitch";
import HomeSearch from "@/components/Home/HomeSearch";
import HomeCity from "@/components/Home/HomeCity";
import { useMemo, useState } from "react";
import { convertLocale } from "@/utils";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const filteredCities = useMemo(() => cities.filter(city => convertLocale(city.name).includes(convertLocale(inputValue))), [inputValue])
  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="min-h-full flex flex-col items-center gap-12 bg-dark-light py-10">
      <h1 className="text-3xl font-bold tracking-wider">
        Türkiye - İllere Göre Hava Durumu
      </h1>
      <HomeSwitch />
      <HomeSearch
        className="w-1/3 bg-transparent border border-slate-500 rounded-sm p-2 outline-none"
        value={inputValue}
        inputHandler={inputHandler}
      />
      <div className="grid grid-cols-4 w-4/5 2xl:w-2/3 gap-3">
        {filteredCities.map((city) => {
          return <HomeCity city={city} key={city.id} />;
        })}
      </div>
    </div>
  );
}
