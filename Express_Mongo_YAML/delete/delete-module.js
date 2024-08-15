const express=require('express');
const deleteEmpModule = require('./deleteEmp');
const deleteUserModule = require('./deleteUser');


const deleteModule=(client)=>{
    const router=express.Router();
    
    router.use('/emp',deleteEmpModule(client));
    router.use('/user',deleteUserModule(client));

    return router;
}

module.exports=deleteModule;
