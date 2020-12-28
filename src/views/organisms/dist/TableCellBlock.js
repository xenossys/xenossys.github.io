"use strict";
exports.__esModule = true;
var react_1 = require("react");
function TableCellBlock(_a) {
    var children = _a.children, align = _a.align, isHeader = _a.isHeader;
    var style = {
        textAlin: align ? align : 'center',
        padding: 5
    };
    if (isHeader) {
        style.background = '#ff0';
        style.border = '1px solid #ccc';
        style.borderLeft = 0;
        style.borderRight = 0;
    }
    else {
        style.borderBottom = '1px solid #eee';
    }
    return react_1["default"].createElement("td", { style: style }, children);
}
exports["default"] = TableCellBlock;
