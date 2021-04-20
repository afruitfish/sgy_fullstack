const http = require('http')
let EventEmitter = require('events')
class koa extends EventEmitter {
    constructor() {
        super()//抄鸡继承
        this.fn
    }
    use(fn) {
        this.fn = fn
    }
    listen(...args) {
        http.createServer(this.fn)
            .listen(...args)
    }
}

module.exports = koa