const Koa = require('koa');
const app = new Koa();
// 启用中间件 一个个函数服务于app, 访问者 
// node server 基本思路
// app.use(ctx => {
//   console.log('fdfdfdf')

// })
app.use(async (ctx) => {
  // ctx  是request response 合集
  //ctx.body = 'hello world'; // 
  if (ctx.url == '/index') {  
    ctx.body = '/index';
  } else if (ctx.url == '/') {
    ctx.body = '/';
  }
})

app.listen(1234, () => {
  console.log('server is starting at port 1234')
})
