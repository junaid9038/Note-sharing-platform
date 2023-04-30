const express = require('express');
const app = express();


app.listen(8000,function(err){
    if(err){
        console.log('error in the running  surver ',err); return
    }
    console.log("surver is running in the port number 8000");
})