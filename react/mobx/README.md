- url 在浏览器上输入后,发生了什么越详细越好
- 要在react项目里完成article数据的展示.你会怎么设计越详细越好
  article model monogodb mysql
  article 组件
  1. storage
  2. api
  3. 组件MVVM

 1. url设计 
    /article
    /article/:id
 2. react-router-dom
     router 配置前端路由SPA single page application
 3. mobx 数据管理
     provider Store 做分支
     mobx observable @action getarticles 
 4. API 
     后端地址
 5. article相关组件 

路由多个模块 /user /articles 
数据状态放在中央 全放在 一个实例会乱
仓库只能有一个
<provider store={store}>
</provider>
 多模块