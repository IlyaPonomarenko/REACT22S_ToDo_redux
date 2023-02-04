import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export interface Data {
  task: string;
}
interface todoList {
  taskList: Data[];
}
const initialState: todoList = {
  taskList: [],
};
export const stateSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // pure reducers to determine a state change
    getTask: (state, action) => {
      state.taskList.push({ task: action.payload });
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTask } = stateSlice.actions;
export default stateSlice.reducer;
