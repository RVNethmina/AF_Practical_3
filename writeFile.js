const fs = require('fs');

fs.writeFile('writeFile.txt','Hello World!',function(err){
    if(err) throw err;
    console.log("File Saved");
});