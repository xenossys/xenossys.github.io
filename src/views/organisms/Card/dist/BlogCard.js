"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Custom_1 = require("@views/atoms/Custom");
function BlogCard(_a) {
    var item = _a.item, index = _a.index, onClickBlogItem = _a.onClickBlogItem;
    var _b = react_1.useState(false), isMouseOver = _b[0], setIsMouseOver = _b[1];
    var onMouseOver = function () {
        setIsMouseOver(true);
    };
    var onMouseLeave = function () {
        setIsMouseOver(false);
    };
    return (react_1["default"].createElement(View.Container, { onClick: function () { return onClickBlogItem(item); } },
        react_1["default"].createElement(View.InnderContainer, { onMouseOver: onMouseOver, onMouseLeave: onMouseLeave, mouseOver: isMouseOver },
            react_1["default"].createElement(View.ImgBox, null),
            react_1["default"].createElement(View.TextBox, null,
                react_1["default"].createElement(Text.Title, null, item.title),
                react_1["default"].createElement(Text.SubTitle, null, item.date + '  |  ' + item.categories)))));
}
exports["default"] = BlogCard;
var View = {
    Container: styled_components_1["default"](Custom_1.ViewDefault)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\twidth: 50%;\n\t\theight: 470px;\n\t\tbackground-color: rgb(248, 249, 250);\n\t\tpadding: 0px 10px;\n\t"], ["\n\t\twidth: 50%;\n\t\theight: 470px;\n\t\tbackground-color: rgb(248, 249, 250);\n\t\tpadding: 0px 10px;\n\t"]))),
    InnderContainer: styled_components_1["default"](Custom_1.ViewDefault)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\theight: 450px;\n\t\twidth: 100%;\n\t\tborder-radius: 6px;\n\t\toverflow: hidden;\n\t\tbox-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 0px;\n\t\tmargin: 0px 0;\n\t\ttransition: all 0.25s;\n\t\t", "\n\t"], ["\n\t\theight: 450px;\n\t\twidth: 100%;\n\t\tborder-radius: 6px;\n\t\toverflow: hidden;\n\t\tbox-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 0px;\n\t\tmargin: 0px 0;\n\t\ttransition: all 0.25s;\n\t\t",
        "\n\t"])), function (props) {
        if (!props.mouseOver) {
            return styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\t\t\t\tmargin-top: 10px;\n\t\t\t\t\tbox-shadow: rgba(0, 0, 0, 0.04) 0px 0px 10px 0px;\n\t\t\t\t"], ["\n\t\t\t\t\tmargin-top: 10px;\n\t\t\t\t\tbox-shadow: rgba(0, 0, 0, 0.04) 0px 0px 10px 0px;\n\t\t\t\t"])));
        }
    }),
    ImgBox: styled_components_1["default"](Custom_1.ViewDefault)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t\twidth: 100%;\n\t\theight: 300px;\n\t\tbackground-color: #999999;\n\t\tcursor: pointer;\n\t"], ["\n\t\twidth: 100%;\n\t\theight: 300px;\n\t\tbackground-color: #999999;\n\t\tcursor: pointer;\n\t"]))),
    TextBox: styled_components_1["default"](Custom_1.ViewDefault)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t\twidth: 100%;\n\t\theight: 150px;\n\t\tpadding: 20px;\n\t\tbackground-color: white;\n\t"], ["\n\t\twidth: 100%;\n\t\theight: 150px;\n\t\tpadding: 20px;\n\t\tbackground-color: white;\n\t"])))
};
var Text = {
    Title: styled_components_1["default"](Custom_1.TextDefualt)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t\tfont-size: 30px;\n\t\tcolor: #333333;\n\t\tcursor: pointer;\n\t\tfont-weight: bold;\n\t"], ["\n\t\tfont-size: 30px;\n\t\tcolor: #333333;\n\t\tcursor: pointer;\n\t\tfont-weight: bold;\n\t"]))),
    SubTitle: styled_components_1["default"](Custom_1.TextDefualt)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t\tfont-size: 20px;\n\t\tcolor: #eceef0;\n\t"], ["\n\t\tfont-size: 20px;\n\t\tcolor: #eceef0;\n\t"])))
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
