"use strict";

// - TODO : markdown file 변환, set바꾸기
var path = require('path');

var fs = require('fs');

var _require = require('./src/helper/makeSet.js'),
    makeSet = _require.makeSet,
    makePostSet = _require.makePostSet,
    makeInjectionOption = _require.makeInjectionOption,
    makeComponent = _require.makeComponent,
    makeComponentIndex = _require.makeComponentIndex;

var directoryPath = path.join(__dirname, '/../src/_posts');
var contentFiles = fs.readdirSync(directoryPath);
var Posts = makePostSet(contentFiles);
var Tags = makeSet(Posts, 'tags');
var Categorys = makeSet(Posts, 'categories');

var _makeInjectionOption = makeInjectionOption(Posts),
    importOption = _makeInjectionOption.importOption,
    componentOption = _makeInjectionOption.componentOption; // console.log(componentOption);


makeComponent(contentFiles, Posts);
makeComponentIndex(Posts, Categorys, Tags, importOption, componentOption);