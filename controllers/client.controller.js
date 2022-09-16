'use strict'
var sql =require('../config/db');
var client = require('../models/client.model');
var mysql =require('mysql');
const { response } = require('express');
exports.Createclient = (req,res)=>{
    sql.query('insert into amazon set?',req.body,function(err,records,fields){
        if(err){
        console.log(err)
        res.send({
            status:500,
            result:'failure',
            response:'failed to insert record'+err.code,
        })
        }
        else{
            console.log('sucess')
            res.send({
                status:200,
                result:'sucess',
                resonse:'sucess to insert record'
            })
        }
    })
}
exports.list_all_client=(req,res)=>{
    console.log("get all clients");
    sql.query('select * from amazon',function(err,record,fields){
        if(err){
            throw err
        }
        else{
            if(record.length>0)
            {
                res.send({
                    status:200,
                    result:'sucess',
                    response:record
                })
            }
            else{
                res.send({
                    status:500,
                    result:'failure',
                    resonse:'no records found'
                })
            }
        }
    })
}

exports.updateclient = (req, res) => {
    // console.log(req.body);
           sql.query('update amazon set? where id="' + req.params.id + '"', req.body, function (err, records, fields) {
          //  console.log(err);
             if (err) {
               res.send({
                 status: 500,
                 result: 'failure',
                 response: req.params.id+'failed to update record ' + err.code
               })
             }
             else {
               if (records.affectedRows > 0) {
                 res.send({
                   status: 200,
                   response: req.params.id + ' updated successfully',
                   result: 'success'
                 })
               }
               else {
                 res.send({
                   status: 500,
                   result: 'failure',
                   response: 'failed to update record'
                 })
               }
             }
 
           })
 }
exports.deleteclient = (req, res) => {
    //console.log(req.body);
    sql.query('delete from amazon where id="' + req.params.id + '"', function (err, records, fields) {
      
      if (!err) {
        res.send({
          status: 200,
          result: 'success',
          response: ' deleted Record'
        })

      } else {
        res.send({
          status: 404,
          response: 'Deletion Failed',
          result: 'failure'
        })
      }
    })
   }