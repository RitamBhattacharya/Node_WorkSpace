import express from "express"
import Customer from "../../customer";


const getAllCustomers=(customers:Customer[])=>{
    const router:any=express.Router();
    
    router.get('/',(req:any,res:any)=>{
        res.json(customers);
    });
    
    return router;
}

export default getAllCustomers;