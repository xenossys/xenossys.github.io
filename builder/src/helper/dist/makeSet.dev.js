"use strict";

var fs = require('fs');

var ejs = require('ejs'); // var marked = require('marked');
// var TerminalRenderer = require('marked-terminal');


var template = fs.readFileSync('../src/views/templates/ejs_format.txt', 'utf8');

var showdown = require('showdown');

var converter = new showdown.Converter(); // text      = '# hello, markdown!'
// html      = converter.makeHtml(text);
// marked.setOptions({
// 	// Define custom renderer
// 	renderer: new TerminalRenderer()
//   });

var hljs = require('highlight.js');

var md = require('markdown-it')();

var _require = require('markdown-it-table'),
    markdownItTable = _require.markdownItTable;

md.use(markdownItTable);
var reactSrc = '../src';

exports.makeSet = function (posts, option) {
  // option : tags, categories
  var DataSet = {};

  for (var i = 0; i < Object.keys(posts).length; i++) {
    var fileName = Object.keys(posts)[i];
    var tagArray = posts[fileName][option].replace('[', '').replace(']', '').split(',');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = tagArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var tag = _step.value;
        var removeSpace = option === 'tags' ? tag.trim().toLowerCase() : tag.trim().toUpperCase();

        if (DataSet[removeSpace] === undefined) {
          DataSet[removeSpace] = [fileName];
        } else {
          DataSet[removeSpace].push(fileName);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return DataSet;
};

exports.makePostSet = function (contentFiles) {
  // option : tags, categories
  var Posts = {};
  var k = 0;
  contentFiles.map(function (file) {
    var body = fs.readFileSync("../src/_posts/".concat(file), 'utf8'); // const fileName = file.split('.')[0];

    var fileName = "Post_".concat(k);
    Posts[fileName] = {};
    Posts[fileName].component = '';
    Posts[fileName].path = "../src/_posts/".concat(file);
    Posts[fileName].fileName = "Post_".concat(k);
    var strArray = body.split('---')[1].split('\n');

    for (var i = 1; i < strArray.length - 1; i++) {
      Posts[fileName][strArray[i].split(':')[0].trim()] = strArray[i].split(':')[1].trim();
    }

    k++;
  });
  return Posts;
};

exports.makeInjectionOption = function (Posts) {
  var importOption = '';
  var componentOption = '';

  for (var i = 0; i < Object.keys(Posts).length; i++) {
    importOption += "import ".concat(Posts[Object.keys(Posts)[i]].fileName, " from \"./").concat(Posts[Object.keys(Posts)[i]].fileName, "\"\n");
    componentOption += "Router.".concat(Object.keys(Posts)[i], ".component = ").concat(Posts[Object.keys(Posts)[i]].fileName, "\n");
  }

  return {
    importOption: importOption,
    componentOption: componentOption
  };
};

exports.makeComponent = function (contentFiles, Posts) {
  contentFiles.map(function (file, index) {
    console.log(index);
    var body = fs.readFileSync(reactSrc + "/_posts/".concat(file), 'utf8');
    var fileName = Posts[Object.keys(Posts)[index]].fileName; // const convertedBody = md.render(body.split('---')[2]);

    var content = ejs.render(template, {
      body: body.split('---')[2],
      fileName: fileName
    });
    fs.writeFile(reactSrc + "/views/pages/posts/".concat(Posts[fileName].fileName, ".tsx"), content, 'utf8', function (err) {
      console.log('비동기적 파일 쓰기 완료');
    });
  });
};

exports.makeComponentIndex = function (Posts, Categorys, Tags, importOption, componentOption) {
  fs.writeFile(reactSrc + '/views/pages/posts/index.tsx', "\n\t  ".concat(importOption, " \n\t\n\t  const Router : any = ").concat(JSON.stringify(Posts), "\n\t\n\t  const Categorys : any = ").concat(JSON.stringify(Categorys), "\n\t\n\t  const Tags :any = ").concat(JSON.stringify(Tags), "\n\t  ").concat(componentOption, "\n\t  export { Router, Categorys, Tags }\n\t"), 'utf8', function (err) {
    if (!err) {
      console.log('성공');
    } else {
      console.log('err : ', err);
    }
  });
};