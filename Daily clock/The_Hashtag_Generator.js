function generateHashtag (str) {
    let tag = '#'+str.replace(/\s+/g,' ').split(' ').map(function(word){
        return word.charAt(0).toUpperCase()+word.slice(1)
    }).join('')
    if(tag==null||tag.length()>=140)
        return false
    return tag
}
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))