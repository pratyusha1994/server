'use strict';
const mysql=require('mysql');

const connection=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    port:process.env.DATABASE_PORT,
    user:process.env.DATABASE_USERNAME,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE_SCHEMA,
})
console.log('db',process.env.DATABASE_SCHEMA)
connection.connect(function(err){
if(err)
{
    console.log("connection error");
}
else{
    console.log("database connected successfully");
}


})
module.exports=connection;