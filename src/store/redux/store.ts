import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice'

export const store = configureStore({
  reducer: {
    products: appSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
