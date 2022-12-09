import cities from "@/assets/data/cities.json";
import HomeSwitch from "@/components/Home/HomeSwitch";
import HomeMapLayout from "@/components/Home/HomeMapLayout";
import HomeListLayout from "@/components/Home/HomeListLayout";
import { setActiveCity } from "@/store/cityWeatherSlice";
import { useMemo, useState } from "react";
import { convertLocale } from "@/utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [mapLayout, setMapLayout] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const selectCityHandler = (id) => {
    navigate(`city/${id}`)
    dispatch(setActiveCity(id))
  }

  const toggleLayout = () => {
    setMapLayout(!mapLayout)
  }
  const filteredCities = useMemo(
    () =>
      cities.filter((city) =>
        convertLocale(city.name).includes(convertLocale(inputValue))
      ),
    [inputValue]
  );
  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };
  return (
    <div className="min-h-full flex flex-col items-center gap-12 bg-dark-light py-10">
      <h1 className="text-3xl font-bold tracking-wider">
        Türkiye - İllere Göre Hava Durumu
      </h1>
      <HomeSwitch toggleLayout={toggleLayout} isMapLayout={mapLayout}/>
      {mapLayout 
        ? (
            <HomeMapLayout selectCityHandler={selectCityHandler}/>
          ) 
        : (
            <HomeListLayout
              selectCityHandler={selectCityHandler}
              inputValue={inputValue}
              inputHandler={inputHandler}
              filteredCities={filteredCities}
              clearInput={clearInput}
            />
      )}
    </div>
  );
}
