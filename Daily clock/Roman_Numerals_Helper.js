var number=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
var roman=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
var RomanNumerals={
    toRoman:function(num){
        console.log(number.length+" "+roman.length)
        let ROMAN='';
        let a=0;
        while(num>0){
            console.log("while")
            while(true){ 
                console.log("while2")
                if(number[a]<=num){ 
                    console.log(number[a])
                    ROMAN=ROMAN+roman[a]; 
                    num-=number[a];
                }
                else{
                    a++;
                    break;
                } 
            } 
        }
        return ROMAN
    },
    fromRoman:function(Roman){
        let a=0,num=0;
        while(true){
            let r=new RegExp('^'+roman[a])
            while(r.test(Roman)){
                console.log(roman[a])
                Roman = Roman.replace(roman[a],'')
                console.log(Roman)
                num+=number[a];
            }
            a++;
            console.log(Roman)
            if(Roman==''){
                break;
            }
        }
        return num
    }
}
console.log(RomanNumerals.toRoman(2991))
console.log(RomanNumerals.fromRoman('XXI'))

