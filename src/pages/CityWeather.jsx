import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import CityGraph from "@/components/City/CityGraph";
import IconWeather from "@/components/IconWeather";
import CityHeader from "@/components/City/CityHeader";
import CityTabs from "@/components/City/CityTabs";
import CityCard from "@/components/City/CityCard";
import Loading from "@/components/Loading";
import { getMinMaxFromDays, getTabs } from "@/utils";
import {
  fetchForecastData,
  setActiveTimeRange,
  setActiveCity,
  activeTimeRangeSelector,
  forecastDataSelector,
} from "@/store/cityWeatherSlice";

export default function CityWeather() {
  const [activeTab, setActiveTab] = useState({});
  const [selectedDayIndex, setSelectedDayIndex] = useState(null);
  const forecastData = useSelector((state) => forecastDataSelector(state));
  const activeTimeRange = useSelector((state) =>
    activeTimeRangeSelector(state)
  );
  const dispatch = useDispatch();
  const city = useLoaderData();
  const dailyForecast = useMemo(
    () => getMinMaxFromDays(forecastData.list),
    [forecastData.list]
  );
  const graphData = useMemo(() => {
    if (!dailyForecast) return;
    const values = Object.values(dailyForecast)
    const data = values.at(selectedDayIndex).list
    
    if(data.length < 2 && selectedDayIndex == 0){
      const nextDayFirstForecast = values.at(1).list.at(0)
      data.push(nextDayFirstForecast)
    }
    return data;
  }, [selectedDayIndex, dailyForecast]);

  const tabs = getTabs();
  const setActiveTabHandler = (tab) => {
    setActiveTab(tab);
  };

  const timeRangeHandler = (selectedTimeRange) => {
    dispatch(setActiveTimeRange(selectedTimeRange));
  };

  const selectedDayHandler = (index) => {
    setSelectedDayIndex(index);
  };

  useEffect(() => {
    setActiveTab(tabs.at(0));
    dispatch(setActiveCity(city.id));
    dispatch(fetchForecastData());
    setSelectedDayIndex(0);
  }, [city]);

  if (forecastData.loading !== false) {
    return <Loading color={activeTab.color} />;
  }

  return (
    <div className="flex flex-col gap-8 pb-8">
      <CityHeader />
      <div className="flex justify-between px-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <IconWeather
              iconId={activeTimeRange.iconId}
              night={false}
              className={"text-5xl"}
            />
            <span>
              <b className="text-3xl">{activeTimeRange.temp}</b> °C
            </span>
          </div>
          <CityTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTabHandler}
          />
        </div>
        <div className="flex flex-col gap-2 text-right">
          <h1 className="font-bold text-3xl">{city.name}</h1>
          <span className="text-slate-500">
            {activeTimeRange.time} <br /> {activeTimeRange.weatherCondition}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-10 justify-center px-20">
        <CityGraph
          selectTimeRange={timeRangeHandler}
          data={graphData}
          dataKey={activeTab.dataKey}
          suffix={activeTab.suffix}
          color={activeTab.color}
        />

        <div className="flex items-center justify-evenly gap-6 px-10">
          {dailyForecast.map((forecast, index) => {
            return (
                <CityCard
                  {...forecast}
                  key={index}
                  isActive={index === selectedDayIndex}
                  setSelectedDay={() => selectedDayHandler(index)}
                />
            )
          })}
        </div>
      </div>
    </div>
  );
}
