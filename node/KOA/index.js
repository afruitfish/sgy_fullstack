var Koa = require('./koaByMyHand/application');

const app = new Koa;

app.listen(3000)

app.use((req, res) => {
    res.end = 'hello world'
})

// const http = require('http')

// http.createServer((req, res) => {
//     res.end('hello meo')
// }).listen(4000)