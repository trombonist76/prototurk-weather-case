import { configureStore } from '@reduxjs/toolkit'
import apiKey from './apiKeySlice'
import cityWeather from './cityWeatherSlice'

export const store = configureStore({
  reducer: {
    apiKey,
    cityWeather
  },
})