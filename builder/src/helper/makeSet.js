const fs = require('fs');
const ejs = require('ejs');
// var marked = require('marked');
// var TerminalRenderer = require('marked-terminal');
const template = fs.readFileSync(
	'../src/views/templates/ejs_format.txt',
	'utf8',
);
const showdown = require('showdown');
const converter = new showdown.Converter();
// text      = '# hello, markdown!'
// html      = converter.makeHtml(text);
// marked.setOptions({
// 	// Define custom renderer
// 	renderer: new TerminalRenderer()
//   });

const hljs = require('highlight.js');
const md = require('markdown-it')();
var { markdownItTable } = require('markdown-it-table');

md.use(markdownItTable);

const reactSrc = '../src';

exports.makeSet = (posts, option) => {
	// option : tags, categories
	const DataSet = {};

	for (let i = 0; i < Object.keys(posts).length; i++) {
		const fileName = Object.keys(posts)[i];
		const tagArray = posts[fileName][option]
			.replace('[', '')
			.replace(']', '')
			.split(',');
		for (let tag of tagArray) {
			const removeSpace =
				option === 'tags' ? tag.trim().toLowerCase() : tag.trim().toUpperCase();
			if (DataSet[removeSpace] === undefined) {
				DataSet[removeSpace] = [fileName];
			} else {
				DataSet[removeSpace].push(fileName);
			}
		}
	}
	return DataSet;
};

exports.makePostSet = (contentFiles) => {
	// option : tags, categories
	const Posts = {};
	let k = 0;
	contentFiles.map((file) => {
		const body = fs.readFileSync(`../src/_posts/${file}`, 'utf8');
		// const fileName = file.split('.')[0];
		const fileName = `Post_${k}`;
		Posts[fileName] = {};
		Posts[fileName].component = '';
		Posts[fileName].path = `../src/_posts/${file}`;
		Posts[fileName].fileName = `Post_${k}`;
		const strArray = body.split('---')[1].split('\n');
		for (let i = 1; i < strArray.length - 1; i++) {
			Posts[fileName][strArray[i].split(':')[0].trim()] = strArray[i]
				.replace(strArray[i].split(':')[0], '')
				.replace(':', '')
				.trim();
		}
		k++;
	});
	return Posts;
};

exports.makeInjectionOption = (Posts) => {
	let importOption = '';
	let componentOption = '';
	for (let i = 0; i < Object.keys(Posts).length; i++) {
		importOption += `import ${Posts[Object.keys(Posts)[i]].fileName} from "./${
			Posts[Object.keys(Posts)[i]].fileName
		}"\n`;
		componentOption += `Router.${Object.keys(Posts)[i]}.component = ${
			Posts[Object.keys(Posts)[i]].fileName
		}\n`;
	}
	return {
		importOption,
		componentOption,
	};
};

exports.makeComponent = (contentFiles, Posts) => {
	contentFiles.map((file, index) => {
		console.log(index);
		const body = fs.readFileSync(reactSrc + `/_posts/${file}`, 'utf8');
		const { fileName } = Posts[Object.keys(Posts)[index]];
		// const convertedBody = md.render(body.split('---')[2]);
		const content = ejs.render(template, {
			body: body.split('---')[2],
			fileName,
		});
		fs.writeFile(
			reactSrc + `/views/pages/posts/${Posts[fileName].fileName}.tsx`,
			content,
			'utf8',
			function (err) {
				console.log('비동기적 파일 쓰기 완료');
			},
		);
	});
};

exports.makeComponentIndex = (
	Posts,
	Categorys,
	Tags,
	importOption,
	componentOption,
) => {
	fs.writeFile(
		reactSrc + '/views/pages/posts/index.tsx',
		`
	  ${importOption} 
	
	  const Router : any = ${JSON.stringify(Posts)}
	
	  const Categorys : any = ${JSON.stringify(Categorys)}
	
	  const Tags :any = ${JSON.stringify(Tags)}
	  ${componentOption}
	  export { Router, Categorys, Tags }
	`,
		'utf8',
		function (err) {
			if (!err) {
				console.log('성공');
			} else {
				console.log('err : ', err);
			}
		},
	);
};
