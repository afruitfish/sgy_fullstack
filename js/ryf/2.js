/**
 * 
 * @author fruitfish
 * @param {any} o 
 * @param {string} type
 * @return boolean 
 */
const isTypeof=(o,type)=>{
    if(['number','string','boolean','object'].indexOf(type)>0){
        return typeof 0 === type
    }else{
        // console.log(Object.prototype.toString.call(o))
        // console.log(Object.prototype.toString.call(o).toLowerCase().indexOf(type))
        return Object.prototype.toString.call(o).toLowerCase().indexOf(type)>0
    }
}
let s =[1,2,3];
console.log(isTypeof(s,'array'));