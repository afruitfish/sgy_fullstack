# 前端三个最重要的知识点

1. es6
2. webpack
  @5.17.0
  npm i -g webpack
  npm i -g webpack-cli  周边生态
3. react

- webpack 处理的入口，  js 文件

- 写代码的时候在 src/index.js 上线的 dist/main.js

- react 初体验
  1. 每个文件都得引入 react
  React 负责提供组件(小程序有内置组件，react是网页的组件(html/css/js DOM))模板编译功能{{}}{name}数据绑定
  ```js
    import React from 'react';
    import ReactDOM from 'react-dom';
  ```
- index.js entry 引入了test.jsx
    react 语法中jsx语法,用来表示模板
    ```js
    render(){
        return(
            <p>test</p>
        )
    }
    ```
    webpack 处理一切静态文件
    