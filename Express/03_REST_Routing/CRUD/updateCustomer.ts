import express from "express"
import Customer from "../customer";

const updateCustomer=(customers:Customer[])=>{
    const router:any=express.Router();
    
    router.put('/:id',(req:any,res:any)=>{
        const updatedCustomer : Customer = {
            id:parseInt(req.params.id),
            name:req.body.name,
            rank:req.body.rank
        };
    
        const index:number = customers.findIndex(c => c.id === parseInt(req.params.id));
        customers[index] = updatedCustomer;
        res.status(202).json(updatedCustomer);
    });
    
    return router;
}

export default updateCustomer;