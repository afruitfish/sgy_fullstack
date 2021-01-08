//user 类型 Object name age
const getUserInfo = function(user){
    if(typeof user != 'Object'||!user||!Object.keys(user).includes("name")||Object.keys(user).includes("age"))
        throw new Error('参数错误');
    return `name:${user.name},age:${user.age}`
}
console.log(getUserInfo({name:'koala',age:18}));
//有什么问题
