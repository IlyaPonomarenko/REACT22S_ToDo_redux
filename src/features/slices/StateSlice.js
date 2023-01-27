import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "todo",
  initialState: {
    todoInfo:{
        name: "",
        description: "",
    }
  },
  reducers: {
    getName: (state, action) => {
      state.todoInfo.name += action.payload;
    },
    getDescription: (state, action) => {
      state.todoInfo.description += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getName, getDescription } = stateSlice.actions;
export const stateManager = (state) => state.todo.todoInfo
export default stateSlice.reducer;
