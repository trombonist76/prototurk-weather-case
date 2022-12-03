import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    secretKey: ''
}

export const apiKeySlice = createSlice({
  name: 'apiKey',
  initialState,
  reducers: {
    setKey: (state, action) => {
      state.secretKey = action.payload
    }
  },
})

export const { setKey } = apiKeySlice.actions
export const apiKeySelector = state => state.apiKey.secretKey
export default apiKeySlice.reducer