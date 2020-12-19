const fetch = require("node-fetch");//内置
let cheerio = require('cheerio');
const { html } = require('cheerio');

let url = 'http://movie.douban.com/top250';

const main = async()=>{//async 关键字
    fetch(url)
        .then(res=>res.text())
        .then(Body=>{
            let $=cheerio.load(Body);
            let movieNodes = $('#contant.item')
            console.log(movieNodes);
        });
}

main();