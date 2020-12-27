//函数天生可以复用
// var Cat = {
//     name:'',
//     color:''
//     }如何复用
function Cat(name,color){
    return{
        name,
        color
    }
}
var cat1 = Cat("阿目",'黑色');
var cat1 = Cat("阿曼",'橘色');
