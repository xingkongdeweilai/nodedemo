const fs = require('fs');

fs.readFile('./block/input.txt', function (err, data) {
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});

console.log("程序执行结束!");