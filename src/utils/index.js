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
  const parsedDate = getFormattedDate(date, "hour")
  return parsedDate;
}

export function getHourAndDay(date) {
  const parsedDate = getFormattedDate(date, "dayHour")
  return parsedDate
}

function getFormattedDate(date, format) {
  const formats = {
    dayHour: "dddd - HH:mm",
    hour: "HH:mm",
    day: "dddd"
  }

  const parsedDate = dayjs(date).locale(tr).format(formats[format])
  return parsedDate

}

export function capitalizeDescription(description) {
  const capitalized = description.split(" ").reduce((acc, cur) => {
    return `${acc} ${capitalizeFirstLetter(cur)}`
  }, "")

  return capitalized
}

const capitalizeFirstLetter = ([first, ...rest], locale = "tr-TR") =>
  first === undefined ? '' : first.toLocaleUpperCase(locale) + rest.join('')

export function getMinMaxFromDays(data) {
  if (!Array.isArray(data)) return
  const dates = data.reduce((groupedObj, currDate) => {
    const day = getFormattedDate(currDate.dt_txt, "day")
    const currWeather = currDate.main
    
    if (!groupedObj.hasOwnProperty(day)) {
      groupedObj[day] = {
        day,
        min: currWeather.temp_min,
        max: currWeather.temp_max,
        iconId: currDate.weather.at(0).id,
        date: currDate.dt
      }
      return groupedObj
    }

    const addedDate = groupedObj[day]
    if (currWeather.temp_min < addedDate.min) addedDate.min = currWeather.temp_min
    if (currWeather.temp_max > addedDate.max) addedDate.max = currWeather.temp_max

    return groupedObj
  }, {})

  const sortedDates = sortByDate(dates)
  return sortedDates
}


function sortByDate(dates) {
  const sorted = Object.values(dates).sort((a, b) => a.date - b.date)
  return sorted
}