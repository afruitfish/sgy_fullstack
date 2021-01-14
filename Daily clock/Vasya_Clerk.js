var a = [25, 25, 50, 50]
console.log(a[1])
function tickets(peopleInLine){
    let cash=[0,0];
    console.log(peopleInLine.length)
    for(let i=0;i<peopleInLine.length;i++){
        if(peopleInLine[i]==25){
            cash[0]++;
        }
        else if(peopleInLine[i]=50){
            if(cash[0]>0){
                cash[0]--;
                cash[1]++;
            }
        }
        else if(cash[0]>0&&cash[1]>0){
            cash[0]--;
            cash[1]--;
        }
        else if(cash[0]>=3){
            cash[0]-=3;
        }

        else{
            return "NO"
        }
    }
    return "YES"
}
