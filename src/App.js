"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const StateSlice_1 = require("./features/slices/StateSlice");
const App = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const [inputData, setInputData] = (0, react_1.useState)("");
    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch((0, StateSlice_1.getTask)(inputData));
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("form", null,
            react_1.default.createElement("input", { type: "text", onChange: (e) => setInputData(e.target.value) }),
            react_1.default.createElement("button", { onClick: handleSumbit }, "Add a task"))));
};
exports.App = App;
