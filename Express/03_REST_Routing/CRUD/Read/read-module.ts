import express from 'express';
import Customer from '../../customer';
import getAllCustomers from './getAllCustomers';
import getCustomer from './getCustomer';


const ReadModule = (customers: Customer[]):void=> {
    const router:any = express.Router();
    
    router.use('/getAllCustomers', getAllCustomers(customers));
    router.use('/getCustomer', getCustomer(customers));

    return router;
}

export default ReadModule;