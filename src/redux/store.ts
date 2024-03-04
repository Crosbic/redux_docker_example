import { configureStore } from '@reduxjs/toolkit'

import postsSlice from './slices/postsSlice'

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const store = () => {
  return configureStore({
    reducer: {
      posts: postsSlice,
    },
  })
}
