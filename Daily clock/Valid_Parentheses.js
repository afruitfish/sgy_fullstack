function Cut(parens){
    return parens.replace('()','')
}
function validParentheses(parens){
    //TODO
    while(true){
        console.log("a")
      parens = Cut(parens);
      if(parens==''){
        return true
        }
      else if(parens == Cut(parens)){
        return false
        }
    }
}
console.log(validParentheses("())"))
