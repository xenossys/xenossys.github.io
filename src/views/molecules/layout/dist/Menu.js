"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./Menu.css");
function Menu() {
    var history = react_router_dom_1.useHistory();
    var onClickAboutBtn = function () {
        history.push('/github-blog/about');
    };
    var onClickPostsBtn = function () {
        history.push('/github-blog/post');
    };
    var onClickCategorysBtn = function () {
        history.push('/github-blog/category');
    };
    return (react_1["default"].createElement("div", { className: "tabMenuInnerBox" },
        react_1["default"].createElement("div", { className: "logoBox" }, "Xenossy"),
        react_1["default"].createElement("div", { onClick: onClickAboutBtn }, "about")));
}
exports["default"] = Menu;
