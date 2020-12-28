"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var reportWebVitals_1 = require("./reportWebVitals");
var react_router_dom_1 = require("react-router-dom");
var SetUp_1 = require("@views/pages/SetUp");
var envConfig_1 = require("./env/envConfig");
react_dom_1["default"].render(react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
    react_1["default"].createElement(react_router_dom_1.Switch, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: envConfig_1.env.prefix, component: SetUp_1["default"] }),
        react_1["default"].createElement(react_router_dom_1.Redirect, { from: '/', to: "/github-blog/home" }))), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals_1["default"]();
