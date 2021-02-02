// 应用的根组件
import React from 'react';
// css 分组件来写的 
import './CommentApp.css';// webpack 一切静态资源皆可打包 
import CommentForm from './CommentForm.js';// webpack 一切静态资源皆可打包 
import CommentList from './CommentList.js';// webpack 一切静态资源皆可打包 

class CommentApp extends React.Component { // 通过继承快速创建类
    constructor() {
        super()
        this.state = {
            name: 'commentApp'
        }
    }
    // 至少要实现的方法
    render() { // 复杂 JSX  template wxml jsx=XML in JS
        return ( // JSX react template (用于网页标签的html叫xml)XML in JS 
            <div class="wrapper">
                {this.state.name}
                <CommentList/>
                <CommentForm/>
            </div>
        )
    }
}

export default CommentApp; // 向外输出一下  挂载到root dom 上的 react的区域
