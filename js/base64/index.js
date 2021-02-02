const webp = require('webp-converter');

webp.cwebp("./sprite.png", "output.webp", "-q 80", function(status, error){
    console.log(status);
})
