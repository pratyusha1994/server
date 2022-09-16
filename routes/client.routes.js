const express = require('express');
const router = express.Router();
module.exports =(app) =>{
    var clientlist =require('../controllers/client.controller');
    router.post('/addclient',clientlist.Createclient);
    router.get('/getclient',clientlist.list_all_client);
    router.delete('/deleteclient/:id',clientlist.deleteclient);
    router.put('/updateclient/:id',clientlist.updateclient);
    app.use('/api/client',router)
}
