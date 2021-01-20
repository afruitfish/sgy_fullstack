function formatDuration(seconds) {
    let date = [[0,'year'],[0,'day'], [0,'hour'],[0,'minute'],[0,'second']]
    if (seconds == 0)
        return 'now'
    date[3][0] = Math.floor((seconds % 3600) / 60)
    date[2][0] = Math.floor((seconds % 86400) / 3600)
    date[1][0] = Math.floor((seconds % 31536000) / 86400)
    date[0][0] = Math.floor(seconds / 31536000)
    date[4][0] = Math.floor(seconds % 60)
    let ans='',k=0
    for(let i=0;i<5;i++){
        if(date[i][0]>=2){
            date[i][1]+='s'
        }
        if(date[i][0]>0){
            ans+=', '+date[i][0]+' '+date[i][1]
            k++;
        }
    }
    if(k>1){
        ans=ans.replace(/(\,)(?!.*\1)/,' and')
    }
    return(ans.slice(2))
}
// 60min 3600h 86400day 31536000year
console.log(formatDuration(3662))
console.log(formatDuration(3600))
console.log(formatDuration(3602))


