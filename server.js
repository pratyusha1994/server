require('dotenv').config();
const express =require('express');
const app=express();
const cors=require('cors');
app.use(cors());
const bodyparser=require('body-parser');
app.use(bodyparser.json())
module.exports=app.listen(8000);
console.log('port running');
var client=require('./routes/client.routes')(app);