import cities from "@/assets/data/cities.json";
import { convertLocale } from "@/utils";
import { setActiveCity } from "@/store/cityWeatherSlice";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useClickOutside from "@/hooks/useClickOutside";

export default function CityDropdown() {
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const ref = useClickOutside(() => {
    if (showOptions) return
    setShowOptions(false)
  })

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const focusHandler = () => {
    setShowOptions(true);
  };

  const selectCityHandler = (id) => {
    setInputValue("")
    setShowOptions(false)
    dispatch(setActiveCity(id))
    navigate(`/city/${id}`)
  };

  const filteredCities = useMemo(
    () =>
      cities.filter((city) =>
        convertLocale(city.name).includes(convertLocale(inputValue))
      ),
    [inputValue]
  );

  return (
    <div className="relative" ref={ref}>
      <input
        placeholder="Şehir seçin"
        onFocus={focusHandler}
        className="bg-transparent border border-slate-500 outline-none p-2 rounded-sm"
        type="text"
        value={inputValue}
        onChange={inputHandler}
      />
      {showOptions && (
        <div className="absolute flex flex-col divide-y w-full border border-slate-500 bg-dark-light max-h-[500px] overflow-y-auto z-10 top-12 rounded-sm">
          {filteredCities.map((city, index) => {
            return <button onClick={() => selectCityHandler(city.id)} key={index} className="p-2">{city.name}</button>;
          })}
        </div>
      )}
    </div>
  );
}
