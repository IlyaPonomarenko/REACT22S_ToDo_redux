import { configureStore } from '@reduxjs/toolkit'
import stateSlice from '../features/slices/stateSlice'
export default configureStore({
  reducer: {
    todo: stateSlice
  }
})