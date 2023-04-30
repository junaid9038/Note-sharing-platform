const express = require('express');
const app = express();

app.use('/',require('./routes/index'));

app.set('view engine','ejs');
app.set('views','./views');


app.listen(8000,function(err){
    if(err){
        console.log('error in the running  surver ',err); return
    }
    console.log("surver is running in the port number 8000");
})