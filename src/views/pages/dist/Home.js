"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BlogCard_1 = require("@views/organisms/Card/BlogCard");
var posts_1 = require("./posts");
var react_router_dom_1 = require("react-router-dom");
function Home() {
    var history = react_router_dom_1.useHistory();
    var onClickBlogItem = function (item) {
        console.log(item);
        history.push("/github-blog/posts/" + (item.title + '-' + item.fileName));
    };
    return (react_1["default"].createElement("div", { style: {
            display: 'flex',
            width: '100%',
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            alignSelf: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap'
        } }, Object.keys(posts_1.Router).map(function (item, index) {
        return (react_1["default"].createElement(BlogCard_1["default"], { onClickBlogItem: onClickBlogItem, item: posts_1.Router[item], index: index }));
    })));
}
exports["default"] = Home;
