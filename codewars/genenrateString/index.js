console.log("hello world".split(" ")[0].toUpperCase().charAt(0)+"hello world".slice(1));
function generate(str){
    return str.length > 140 || str === '' ? false: '#' + str.split(' ').map(capitalize).join(' ') +'#'
}
function capitalize(item){
    return item.charAt(0).toUpperCase() + item.slice(1)
}
console.log(generate('hello world'));