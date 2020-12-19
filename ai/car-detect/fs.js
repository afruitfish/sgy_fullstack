const { compact } = require("underscore");

const fs = require('fs');

fs.readFile('./shun.png',function(err,data){
    // console.log(err);
    if(err){
        throw new Error(err);
        return;
    }
    console.log(data)
})