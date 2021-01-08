

function duplicateEncode(word){
    // ...
    // word.toLowerCase();
    // let map = new Map();
    // for(let i of word){
    //     if(map.has(i)){
    //         map.set(i,map.has(i)+1);
    //     }
    //     else{
    //         map.set(i,1);
    //     }
    // }
    // var NewString="";
    // for(let j of word){
    //     if(map.get(i)>1){
    //         NewString=NewString+")";
    //     }
    //     else{
    //         NewString=NewString+"(";
    //     }
    // }
    // return NewString;
    return word
        .split("")
        .map(function (a) {return word.indexOf(a) != word.lastIndexOf(a) ? ")" : "(";})
        .join("");
}
