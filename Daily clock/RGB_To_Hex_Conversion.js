function toOX(num){
    if(num==0){
        return '00'
    }
    if(num<16){
        return '0'+num.toString(16).toString()
    }
    return num.toString(16).toString()
}
function select(num){
    if(num<0)
        return 0
    else if(num>255)
        return 255
    else
        return num
}
function rgb(r, g, b){
    console.log(toOX(toOX(select(r))))
    console.log(toOX(select(g)))
    console.log(toOX(select(b)))
    // complete this function  
    return (toOX(select(r))+toOX(select(g))+toOX(select(b))).toUpperCase()
}  
console.log(rgb(0,0,0))
