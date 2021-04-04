const goods = [{
    name: "iphone",
    price: 5000,
    inventory: 5,
    id: 1
}, {
    name: "huaweiN123",
    price: 10000,
    inventory: 2,
    id: 2
}, {
    name: "car",
    price: 105000,
    inventory: 3,
    id: 3
}]

export default {
    //
    getProducts: (cb) => setTimeout(cb(goods), 1000)
}