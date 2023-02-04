import { configureStore } from '@reduxjs/toolkit'
import stateSlice from '../features/slices/StateSlice'

export const store = configureStore({
  reducer: {
    todo: stateSlice
  }
})
type RootState = ReturnType<typeof store.getState>;
export const stateManager = (state: RootState) => state.todo.taskList;