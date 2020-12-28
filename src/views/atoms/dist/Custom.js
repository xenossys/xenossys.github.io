"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ButtonDefault = exports.TextInputDefault = exports.ViewShadowDefault = exports.ViewDefault = exports.TextDefualt = void 0;
var styled_components_1 = require("styled-components");
exports.TextDefualt = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tfont-size: 13px;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n"], ["\n\tfont-size: 13px;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n"])));
exports.ViewDefault = styled_components_1["default"].span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n"], ["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n"])));
exports.ViewShadowDefault = styled_components_1["default"].span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tdisplay: flex;\n\tflex-direction: column;\n"], ["\n\tdisplay: flex;\n\tflex-direction: column;\n"])));
exports.TextInputDefault = styled_components_1["default"].input.attrs(function (props) { return ({
    type: 'text'
}); })(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\twidth: 200px;\n\theight: 50px;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n"], ["\n\twidth: 200px;\n\theight: 50px;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n"])));
exports.ButtonDefault = styled_components_1["default"].span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\twidth: 60px;\n\theight: 35px;\n\tborder: 1px solid black;\n\tborder-radius: 10px;\n\tbackground-color: white;\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n\tcursor: pointer;\n"], ["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\twidth: 60px;\n\theight: 35px;\n\tborder: 1px solid black;\n\tborder-radius: 10px;\n\tbackground-color: white;\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n\tcursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
