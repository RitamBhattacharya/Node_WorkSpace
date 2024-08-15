const express=require('express');
const retrieveEmp = require('./retrieveEmp');
const retrieveUser = require('./retrieveUser');

const retrieveModule=(client)=>{
    const router=express.Router();

    router.use('/emp',retrieveEmp(client));
    router.use('/user',retrieveUser(client));

    return router;
}

module.exports=retrieveModule;
