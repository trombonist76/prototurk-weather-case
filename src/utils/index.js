import dayjs from "dayjs";
import tr from "dayjs/locale/tr";

export function convertLocale(string, locale = "tr-TR") {
  const result = string.toLocaleLowerCase(locale);
  return result;
}

export function getTabs() {
  const tabs = [
    {
      id: 1,
      name: "Sıcaklık",
      dataKey: (data) => data.main.temp,
      suffix: "°C",
      color: "#bfb348",
    },
    {
      id: 2,
      name: "Hissedilen",
      dataKey: (data) => data.main.feels_like,
      suffix: "°C",
      color: "#bfb348",
    },
    {
      id: 1,
      name: "Nem",
      dataKey: (data) => data.main.humidity,
      suffix: "%",
      color: "#F4FCFF",
    },
    {
      id: 1,
      name: "Rüzgar",
      dataKey: (data) => data.wind.speed,
      suffix: "km/h",
      color: "#A1C0EE",
    },
  ];

  return tabs;
}

export function filterDataByTab(list, keyFunc) {
  const filteredData = list.map((data) => keyFunc(data));
  return filteredData;
}

export function getHour(date) {
  const parsedDate = dayjs(date).format("HH:mm");
  return parsedDate;
}

export function getHourAndDay(date) {
  const parsedDate = dayjs(date).locale(tr).format("dddd - HH:mm")
  return parsedDate
}

export const capitalizeDescription = (description) => {
  const capitalized = description.split(" ").reduce((acc, cur) => {
    return `${acc} ${capitalizeFirstLetter(cur)}`
  },"")

  return capitalized
}

const capitalizeFirstLetter = ([ first, ...rest ], locale = "tr-TR") =>
  first === undefined ? '' : first.toLocaleUpperCase(locale) + rest.join('')