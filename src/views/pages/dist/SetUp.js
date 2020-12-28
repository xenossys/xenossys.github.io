"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
require("./setUp.css");
var helper_1 = require("@modules/routes/helper");
var Menu_1 = require("@views/molecules/layout/Menu");
var Custom_1 = require("@views/atoms/Custom");
var styled_components_1 = require("styled-components");
// 파일이름 문제
function SetUp() {
    return (react_1["default"].createElement(View.Container, null,
        react_1["default"].createElement(View.InnerContainer, null,
            react_1["default"].createElement(View.TabMenuBox, null,
                react_1["default"].createElement(Menu_1["default"], null)),
            react_1["default"].createElement(View.ContentsArea, null,
                react_1["default"].createElement(View.RouterBox, null, helper_1.switchRoutes())))));
}
exports["default"] = SetUp;
var View = {
    Container: styled_components_1["default"](Custom_1.ViewDefault)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\twidth: 100%;\n\t\theight: 100vh;\n\t\tflex-direction: column;\n\t\tbackground-color: rgb(248, 249, 250);\n\t\toverflow-y: scroll;\n\t"], ["\n\t\twidth: 100%;\n\t\theight: 100vh;\n\t\tflex-direction: column;\n\t\tbackground-color: rgb(248, 249, 250);\n\t\toverflow-y: scroll;\n\t"]))),
    InnerContainer: styled_components_1["default"](Custom_1.ViewDefault)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\tmargin: 0px auto;\n\t\twidth: 100%;\n\t\tmax-width: 1000px;\n\t"], ["\n\t\tmargin: 0px auto;\n\t\twidth: 100%;\n\t\tmax-width: 1000px;\n\t"]))),
    TabMenuBox: styled_components_1["default"](Custom_1.ViewDefault)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\twidth: 100%;\n\t\theight: 70px;\n\t\t/* border-bottom: 1px black solid; */\n\t\tjustify-content: center;\n\t"], ["\n\t\twidth: 100%;\n\t\theight: 70px;\n\t\t/* border-bottom: 1px black solid; */\n\t\tjustify-content: center;\n\t"]))),
    ContentsArea: styled_components_1["default"](Custom_1.ViewDefault)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t\tflex: 1;\n\n\t\twidth: 100%;\n\t\t/* height: 100%; */\n\t"], ["\n\t\tflex: 1;\n\n\t\twidth: 100%;\n\t\t/* height: 100%; */\n\t"]))),
    RouterBox: styled_components_1["default"](Custom_1.ViewDefault)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\talign-items: center;\n\t\tflex-direction: column;\n\t"], ["\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\talign-items: center;\n\t\tflex-direction: column;\n\t"])))
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
