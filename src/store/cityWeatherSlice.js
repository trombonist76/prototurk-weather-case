import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cities from "@/assets/data/cities.json";
import { fetchWeatherData } from "../services/api";
import { capitalizeDescription, getHourAndDay } from "../utils";

const initialState = {
  activeCity: null,
  activeTimeRange: {
    time: "",
    weatherCondition: "",
    iconId: null
  },
  forecastData: {
    loading: "idle",
    list: null
  }
};

export const fetchForecastData = createAsyncThunk(
  'cityWeather/fetchData',
  async (__, { getState }) => {
    const city = getState().cityWeather.activeCity
    const apiKey = getState().apiKey.secretKey
    const response = await fetchWeatherData(city, apiKey)
    return response
  })

export const cityWeatherSlice = createSlice({
  name: "cityWeather",
  initialState,
  reducers: {
    setActiveCity: (state, action) => {
      const city = cities.find((city) => city.id === action.payload);
      state.activeCity = city;
    },
    setActiveTimeRange: (state, action) => {
      const selectedTimeRange = action.payload
        ? action.payload
        : state.forecastData.list.at(0)

      const { description, id } = selectedTimeRange.weather.at(0);
      const temp = parseInt(selectedTimeRange.main.temp)
      const weatherCondition = capitalizeDescription(description);
      const parsedDate = getHourAndDay(selectedTimeRange.dt_txt);
      state.activeTimeRange = {
        weatherCondition,
        iconId: id,
        time: parsedDate,
        temp
      }
    },
  },
  extraReducers: {
    [fetchForecastData.pending]: (state) => {
      state.forecastData.loading = true
    },
    [fetchForecastData.fulfilled]: (state, action) => {
      state.forecastData.list = action.payload.list
      state.forecastData.loading = false
    },
    [fetchForecastData.rejected]: (state) => {
      state.forecastData.loading = false
    },
  },
})

export const { setActiveCity, setActiveTimeRange } = cityWeatherSlice.actions;
export const activeCitySelector = (state) => state.cityWeather.activeCity;
export const activeTimeRangeSelector = (state) => state.cityWeather.activeTimeRange;
export const forecastDataSelector = (state) => state.cityWeather.forecastData;
export default cityWeatherSlice.reducer;
