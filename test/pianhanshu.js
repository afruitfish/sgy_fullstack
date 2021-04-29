const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class MyPromise {
    // 构造方法接收一个回调
    constructor(executor) {
        this._resolveQueue = []    // then收集的执行成功的回调队列
        this._rejectQueue = []     // then收集的执行失败的回调队列
        this.status = PENDING
        // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
        let _resolve = (val) => {
            this.status = FULFILLED
            // 从成功队列里取出回调依次执行
            while (this._resolveQueue.length) {
                const callback = this._resolveQueue.shift()
                callback(val)
            }
        }
        // 实现同resolve
        let _reject = (val) => {
            this.status = REJECTED
            while (this._rejectQueue.length) {
                const callback = this._rejectQueue.shift()
                callback(val)
            }
        }
        // new Promise()时立即执行executor,并传入resolve和reject
        try {
            executor(_resolve, _reject)
        }
        catch (err) {
            rejectFn(err)
        }
    }
    // then方法,接收一个成功的回调和一个失败的回调，并push进对应队列
    then(resolveFn, rejectFn) {
        this._resolveQueue.push(resolveFn)
        this._rejectQueue.push(rejectFn)
        console.log(this._rejectQueue, '\n', this._resolveQueue);
    }

}
const p1 = new MyPromise((resolve, reject) => {
    let result = 1
    setTimeout(() => {
        result = 3
        resolve(result)
    }, 1000);
})

p1.then(res => console.log(res))

var arr = [0, 2, 4, 6, 8];
var sum = 0;
var str = arr.forEach(function (item, index, arr) {
    sum += item;
    item = item / 2
    // console.log("sum的值为：", sum); //0 2 6 12 20
    // console.log(this); //window
}, this)
console.log(sum);//20
console.log(str); //undefined
console.log(arr)
