import { configureStore } from '@reduxjs/toolkit'
import apiKey from './apiKeySlice'

export const store = configureStore({
  reducer: {
    apiKey,
  },
})