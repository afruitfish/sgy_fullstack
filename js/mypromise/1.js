const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

const promise = {
    constructor(exec) {
        this.resqueue = []
        this.rejqueue = []
        this.status = PENDING
        this.value = null
        this.err = null
        resolve = (v) => {
            if (this.status != PENDING)
                return
            this.value = v
            this.status = FULFILLED
            this.resqueue.foreach(fn => fn(v))
        }
        reject = (e) => {
            if (this.status != PENDING)
                return
            this.err = err
            this.status = REJECTED
            this.rejqueue.foreach(fn => fn(e))
        }
        try {
            exec(resolve, reject)
        }
        catch (e) {
            reject(e)
        }
        then = (_res, _rej) => {
            _res == typeof _res == 'function' ? _res : v => v
            _rej == typeof _rej == 'function' ? _rej : e => e
            if (this.status == PENDING) {
                this.resqueue.push(_res)
                this.rejqueue.push(_rej)
            }
            else if (this.status == FULFILLED) {
                _res(this.value)
            } else {
                _rej(this.err)
            }
        }
    }
}

module.exports = promise 