"use strict";
exports.__esModule = true;
var react_1 = require("react");
function CodeBlock(_a) {
    var value = _a.value;
    return (react_1["default"].createElement("pre", { style: { background: '#000', color: '#fff', padding: 50 } },
        react_1["default"].createElement("code", null, value)));
}
exports["default"] = CodeBlock;
