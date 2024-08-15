const express=require('express');
const createEmpModule = require('./createEmp');
const createUserModule = require('./createUser');

const createModule=(client)=>{
    const router=express.Router();

    router.use('/emp',createEmpModule(client));
    router.use('/user',createUserModule(client));

    return router;
}

module.exports=createModule;
