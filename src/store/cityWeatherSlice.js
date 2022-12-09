import { createSlice } from "@reduxjs/toolkit";
import cities from "@/assets/data/cities.json";

const initialState = {
  activeCity: {},
  selectedTimeRange: {}
};

export const cityWeatherSlice = createSlice({
  name: "cityWeather",
  initialState,
  reducers: {
    setActiveCity: (state, action) => {
      const city = cities.find((city) => city.id === action.payload);
      state.activeCity = city;
    },
    setActiveTimeRange: (state, action) => {
      const activeTimeRange = action.payload
      state.activeTimeRange = activeTimeRange
    }
  },
});

export const { setActiveCity, setActiveTimeRange } = cityWeatherSlice.actions;
export const activeCitySelector = (state) => state.cityWeather.activeCity;
export default cityWeatherSlice.reducer;
