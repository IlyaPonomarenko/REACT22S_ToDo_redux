"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
const App_1 = require("./App");
const react_redux_1 = require("react-redux");
const store_1 = require("./app/store");
const root = client_1.default.createRoot(document.getElementById("root"));
root.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store_1.store}>
     <App_1.App />
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
