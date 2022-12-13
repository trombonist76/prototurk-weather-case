import { createSlice } from '@reduxjs/toolkit'
import { getApiKeyFromSession, saveApiKey } from '@/services/session'

const initialState = {
  secretKey: getApiKeyFromSession() || ''
}

export const apiKeySlice = createSlice({
  name: 'apiKey',
  initialState,
  reducers: {
    setKey: (state, action) => {
      if (!action.payload) return
      state.secretKey = action.payload
      saveApiKey(action.payload)
    }
  },
})

export const { setKey } = apiKeySlice.actions
export const apiKeySelector = state => state.apiKey.secretKey
export default apiKeySlice.reducer