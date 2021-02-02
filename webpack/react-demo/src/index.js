// var p = document.createElement('p');
// p.innerText = 'test';

// var root = document.getElementById('root');
// root.appendChild(p);
import React from 'react';
import ReactDOM from 'react-dom';
// 引入 test.jsx 模块
import TextComponent from './test.jsx';

ReactDOM.render(<TextComponent/>,document.getElementById('root'))
