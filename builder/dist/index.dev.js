"use strict";

var Router = {
  test1: {
    component: '',
    path: '../src/_posts/test1.md',
    fileName: 'Post_0',
    title: '도커 설치하기 (ubuntu 18)',
    author: 'Xenossys',
    date: '2020-12-15 16',
    categories: '[React-Native]',
    tags: '[React-native, error, test]',
    toc: 'false'
  },
  test2: {
    component: '',
    path: '../src/_posts/test2.md',
    fileName: 'Post_1',
    title: '도커 설치하기 (ubuntu 18)',
    author: 'Xenossys',
    date: '2020-12-15 16',
    categories: '[React-Native, KKK]',
    tags: '[react-native, android, error]',
    toc: 'false'
  }
};
Router.test1.component = [Router.test1.fileName];
var Categorys = {
  'REACT-NATIVE': ['test1', 'test2'],
  KKK: ['test2']
};
var Tags = {
  'react-native': ['test1', 'test2'],
  error: ['test1', 'test2'],
  test: ['test1'],
  android: ['test2']
};
console.log('Router.test1.component : ', Router.test1.component); // export { Router, Categorys, Tags };