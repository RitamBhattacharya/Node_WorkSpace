import express from "express"
import Customer from "../customer";

const addCustomer = (customers: Customer[])=> {
    const router: any = express.Router();

    router.post('/', (req: any, res: any) => {
        const newCustomer: Customer = {
            id:customers.length+1,
            name:req.body.name,
            rank:req.body.rank
        }
        customers.push(newCustomer);
        res.status(201).json(newCustomer);
    

    });

    return router;
}

export default addCustomer;