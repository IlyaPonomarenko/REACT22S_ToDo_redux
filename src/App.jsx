"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const App = () => {
    const handleSumbit = () => {
    };
    return (<div>
      <h2>your task</h2>
      <input type="text" name="task-name" id="" required/>
      <h2>Description of your task</h2>
      <button onClick={handleSumbit}></button>
      <div className='task-container'>
        <p></p>
      </div>
    </div>);
};
exports.default = App;
