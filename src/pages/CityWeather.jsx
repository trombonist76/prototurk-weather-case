import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CityGraph from "@/components/City/CityGraph";
import IconWeather from "@/components/IconWeather";
import CityHeader from "@/components/City/CityHeader";
import CityTabs from "@/components/City/CityTabs";
import { fetchWeatherData } from "@/services/api";
import { useQuery } from "react-query";
import { apiKeySelector } from "@/store/apiKeySlice";
import { getTabs } from "@/utils";
import { useLoaderData } from "react-router-dom";
import { capitalizeDescription, getHourAndDay } from "../utils";

export default function CityWeather() {
  const [activeTab, setActiveTab] = useState({});
  const [activeTimeRange, setActiveTimeRange] = useState({time:"", weatherCondition:"", iconId:null})
  const apiKey = useSelector((state) => apiKeySelector(state));
  const city = useLoaderData();
  const { status, data, error } = useQuery("weatherData", () =>
    fetchWeatherData(city, apiKey)
  );
  const tabs = getTabs();
  const setActiveTabHandler = (tab) => {
    setActiveTab(tab);
  };

  const timeRangeHandler = (selectedTimeRange) => {
    console.log('selectedTimeRange', selectedTimeRange)
    const { description, id } = selectedTimeRange.weather.at(0)
    console.log('id', id)
    const weatherCondition = capitalizeDescription(description)
    const parsedDate = getHourAndDay(selectedTimeRange.dt_txt)
    setActiveTimeRange({
      weatherCondition,
      iconId:id,
      time: parsedDate
    })
  }

  useEffect(() => {
    setActiveTab(tabs.at(0));
  }, []);

  useEffect(() => {
    if(!data?.list) return
    const firstTimeRange = data?.list.at?.(0)
    timeRangeHandler(firstTimeRange)
  }, [status]);

  if (!activeTimeRange.time || status === "loading") {
    return <div>Loadingg...</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      {console.log(activeTimeRange)}
      <CityHeader />
      <div className="flex justify-between px-20">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <IconWeather iconId={activeTimeRange.iconId} night={false} className={"text-5xl"} />
            <span>
              <b className="text-3xl">16</b> °C
            </span>
          </div>
          <CityTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTabHandler}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">{city.name}</h1>
          <span className="text-right text-slate-500">
            {activeTimeRange.time} <br /> {activeTimeRange.weatherCondition}
          </span>
        </div>
      </div>
      <div className="flex justify-center px-20">
        <CityGraph
          selectTimeRange={timeRangeHandler}
          data={data?.list.slice(0, 8)}
          dataKey={activeTab.dataKey}
          suffix={activeTab.suffix}
          color={activeTab.color}
        />
      </div>
    </div>
  );
}
