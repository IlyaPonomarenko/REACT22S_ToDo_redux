"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stateManager = exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const StateSlice_1 = __importDefault(require("../features/slices/StateSlice"));
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        todo: StateSlice_1.default
    }
});
const stateManager = (state) => state.todo.taskList;
exports.stateManager = stateManager;
