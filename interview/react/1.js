// writer 全局
let writer = {
    firstName: "婧",
    lastName: "龙",
    num: 10
}

// 函数有什么问题
function appendCompany(obj) {
    let copyWriter = Object.assign({},obj)
    copyWriter.company = '字节';
    return copyWriter;
}

console.log(appendCompany(writer));

if(!writer.company) {
    console.log('没有company');
}

console.log(writer);
