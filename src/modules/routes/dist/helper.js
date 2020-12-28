"use strict";
exports.__esModule = true;
exports.switchRoutes = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var envConfig_1 = require("../../env/envConfig");
var Home_1 = require("@views/pages/Home");
var Tag_1 = require("@views/pages/Tag");
var Category_1 = require("@views/pages/Category");
var About_1 = require("@views/pages/About");
var Post_1 = require("@views/pages/Post");
exports.switchRoutes = function () {
    console.log(envConfig_1.env.prefix + '/home');
    return (react_1["default"].createElement(react_router_dom_1.Switch, null,
        react_1["default"].createElement(react_router_dom_1.Route, { path: envConfig_1.env.prefix + '/home', component: Home_1["default"], exact: true }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: envConfig_1.env.prefix + '/tags', component: Tag_1["default"] }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: envConfig_1.env.prefix + '/posts/:postId', component: Post_1["default"] }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: envConfig_1.env.prefix + '/category', component: Category_1["default"], exact: true }),
        react_1["default"].createElement(react_router_dom_1.Route, { path: envConfig_1.env.prefix + '/about', component: About_1["default"], exact: true }),
        react_1["default"].createElement(react_router_dom_1.Redirect, { from: envConfig_1.env.prefix, to: envConfig_1.env.prefix + '/home' })));
};
