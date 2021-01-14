
// console.log(String.fromCharCode(110-13)) 
function rot13(){
    //your code here
    let message='a Aa!sd';
    return message.split("").map(function(a){
        // console.log(a)
        let A=a.charCodeAt(0);
        // console.log(A)
        switch(true){
            case(A<78&&A>64):
                console.log(A);
                return String.fromCharCode(A+13)
            case(A>77&&A<91):
                console.log(A);
                return String.fromCharCode(A-13)
            case(A>96&&A<110):
                console.log(A);
                return String.fromCharCode(A+13)
            case(A>109&&A<123):
                console.log(A);
                return String.fromCharCode(A-13)
            default:
                return a
        }
    }).join("");
}
console.log(rot13())