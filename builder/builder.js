// - TODO : markdown file 변환, set바꾸기

const path = require('path');
const fs = require('fs');

const {
	makeSet,
	makePostSet,
	makeInjectionOption,
	makeComponent,
	makeComponentIndex,
} = require('./src/helper/makeSet.js');

const directoryPath = path.join(__dirname, '/../src/_posts');
const contentFiles = fs.readdirSync(directoryPath);

const Posts = makePostSet(contentFiles);

const Tags = makeSet(Posts, 'tags');

const Categorys = makeSet(Posts, 'categories');

const { importOption, componentOption } = makeInjectionOption(Posts);
// console.log(componentOption);
makeComponent(contentFiles, Posts);
makeComponentIndex(Posts, Categorys, Tags, importOption, componentOption);
