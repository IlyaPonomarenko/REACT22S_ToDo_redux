Object.defineProperty(exports, "__esModule", { value: true });
exports.getTask = exports.stateSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    taskList: [],
};
exports.stateSlice = (0, toolkit_1.createSlice)({
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
exports.getTask = exports.stateSlice.actions.getTask;
exports.default = exports.stateSlice.reducer;
