"use strict";
exports.__esModule = true;
var react_1 = require("react");
function BlockQuoteBlock(_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { style: {
            border: '1px dashed #aaa',
            borderRadius: 10,
            paddingLeft: 10,
            margin: 5
        } }, children));
}
exports["default"] = BlockQuoteBlock;
