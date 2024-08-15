const express=require('express');
const updateEmpModule = require('./updateEmp');
const updateUserModule = require('./updateUser');



const UpdateModule=(client)=>{
    const router=express.Router();
    
    router.use('/emp',updateEmpModule(client));
    router.use('/user',updateUserModule(client));

    return router;
}

module.exports=UpdateModule;
