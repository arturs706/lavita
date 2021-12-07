import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/reducers/cartSlice'

export const store = configureStore ({
    reducer: {
    counter: counterReducer,
  },
})
