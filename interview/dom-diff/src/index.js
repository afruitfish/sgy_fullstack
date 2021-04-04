import { createElement, render, renderDOM } from './element';
// DOM -> VirtualDOM
// 在内存中创建， 模拟真实DOM的层次， 节点， 属性， 子节点
// 树 递归  最后结点是文本结点时， 就退出 
// 相同的操作 1. 创造结点 2. 设置属性 3. 子结点
{/* <ul class="list">
    <li class="item">白敬亭</li>
    <li class="item">婷婷</li>
  </ul>  */}
// DOM 树的表达转换形式
let virtualDOM = createElement('ul',{
  class:'list',
}, [
  createElement('li', {
    class:'item'
  }, ['白敬亭']),
  createElement('li', {
    class:'item'
  }, ['婷婷'])
])

// console.log(virtualDOM);
let el = render(virtualDOM);
// console.log(el, '---------');

renderDOM(el, document.getElementById('root'));
