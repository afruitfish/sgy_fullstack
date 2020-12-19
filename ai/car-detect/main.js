const AipOcrClient= require('baidu-aip-sdk').ocr; //图像识别
const fs =require('fs');
const image =fs.readFileSync("1.png").toString("base64");
// 内置模块 fileSystem
//1.读入文件 I/O 从硬盘里读入内存中，
const APP_ID="23078067";
const API_KEY="1AOOTAN8IzBstjcfxOrYL78k";
const SECRET_KEY="ZxxiVP78dIvR17RMANzA9jv4EWwRmefL";

const client= new AipOcrClient(APP_ID,API_KEY,SECRET_KEY);
const option={};
option["multi_detect"]="true";

client
    .licensePlate(image,option)
    .then(function(result){
        console.log(result);
    })
    .catch(function(err){
        console.log(err);
    })
