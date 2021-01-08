const arr = [3,4,5];
//头尾加删
arr.push(6);
//面向对象
arr.pop();
console.log(arr.pop());
arr.unshift(2);
console.log(arr);
arr.shift();
console.log(arr);
for(let num in arr){
    console.log(arr[num]);
}
arr.forEach(item =>{
    console.log(item);
})
console.log(arr.join(" "));
console.log(arr.splice(0,arr.length));

