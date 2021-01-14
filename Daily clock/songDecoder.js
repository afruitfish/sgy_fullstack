var ong = "AWUBBWUBC"
var ong1 = "AWUBWUBWUBBWUBWUBWUBC"
var ong2 = "WUBAWUBBWUBCWUB"

function songDecoder(song){
  // ...
  return song
            .replace(/WUB/g," ")
            .replace(/\s{2,}/g," ")
            .replace(/(^\s*)|(\s*$)/g, "")
}
console.log(songDecoder(ong))
console.log(songDecoder(ong1))
console.log(songDecoder(ong2))

