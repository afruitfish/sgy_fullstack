// console.log('AI 来辣，牛逼！')
const ApiImageClassifyClient = require('baidu-aip-sdk').imageClassify;//node 关键字
const fs = require('fs');//内置模块 filesystem
//    1. 读入文件 I/O  从硬盘进内存，
const APP_ID="23077970";
const API_KEY="PjdGjGpU2BkWM8bmrde1aa3W";
const SECRET_KEY="xR8zEZiEa2kui805d0GFrDgvdEsabFIo";

const Client = new ApiImageClassifyClient(APP_ID,API_KEY,SECRET_KEY);
// const fs = require('fs');
const image = fs.readFileSync("shun.png").toString("base64");

Client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err)
    })