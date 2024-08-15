import express from "express"
import Customer from "../customer";

const deleteCustomer=(customers:Customer[])=>{
    const router:any=express.Router();
    
    router.delete('/:id',(req:any,res:any)=>{
        const index:number = customers.findIndex(c => c.id === parseInt(req.params.id));
        const deletedCustomer = customers.splice(index, 1)[0];
        res.status(202).json(deletedCustomer);
    
    });
    
    return router;
}

export default deleteCustomer;