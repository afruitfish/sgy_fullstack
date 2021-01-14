function domainName(url){
  console.log(url.split("."))
  let urllist=url.split(".")
  if(urllist[0]=='http://www'||urllist[0]=='https://www'||urllist[0]=='www'){
    return urllist[1]
  }
  else if(urllist[0].split("://")[0]=='http'||urllist[0].split("://")[0]=='https'){
    return urllist[0].split("://")[1]
  }
  else{
    return urllist[0]
  }
}
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:www\.)?([^\.]+)/i);
  // return url.match(/(?:http(?:s)?:\/\/)?(?:www\.)?([^\.]+)/i)[1];
}
//   http://      .
//   https://    .
//   http://  www.    .
//   https://  www.   .
//   www.   .

console.log(domainName('cnblogs.com/yinjiangchong/p/9439837.html'))


