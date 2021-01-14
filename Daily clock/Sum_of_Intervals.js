a = [ [ 348, 434 ],[ -126, -90 ],[ -151, 50 ],[ -184, 22 ],[ -248, -118 ],[ -153, 438 ],[ 126, 128 ],[ -112, 257 ],[ 471, 485 ],[ -47, 387 ],[ 73, 500 ],[ -283, 500 ],[ 498, 500 ],[ 198, 283 ] ]
// console.log(a.length)
// console.log(a[0])
// console.log(a[0][0])
// console.log(a[0][1])
function sumIntervals(intervals){
    //TODO
    // console.log(intervals)
    intervals=intervals.sort(function(a,b){
            return a[0]-b[0]
    });
    // console.log(intervals)
    let a=[];
    a[0]=intervals[0][0];
    a[1]=intervals[0][1];
    let start=0;
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0]>a[start+1]){
            start+=2;
            a.push(intervals[i][0])
            a.push(intervals[i][1])
        }
        else if(intervals[i][1]>a[start+1]){
            a[start+1]=intervals[i][1]
        }
    }
    let mun=0;
    for(let j=0;j<=start;j+=2){
        mun=mun+a[j+1]-a[j]
    }
    return mun
}
console.log(sumIntervals(a))