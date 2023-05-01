const express = require('express');
const app = express();

// require library and call for use layouts
const expressEjsLayouts = require('express-ejs-layouts');
app.use(expressEjsLayouts);

app.use('/',require('./routes/index'));

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);



app.set('view engine','ejs');
app.set('views','./views');
// access for public folder
app.use(express.static('./assets'));


app.listen(8000,function(err){
    if(err){
        console.log('error in the running  surver ',err); return
    }
    console.log("surver is running in the port number 8000");
})