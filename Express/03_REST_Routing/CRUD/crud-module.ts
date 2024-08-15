import express from 'express';
import Customer from '../customer';
import deleteCustomer from './deleteCustomer';
import addCustomer from './addCustomer';
import updateCustomer from './updateCustomer';
import ReadModule from './Read/read-module';

const CRUDModule = (customers: Customer[]):void=> {
    const router:any = express.Router();

    router.use('/',ReadModule(customers));
    router.use('/deleteCustomer', deleteCustomer(customers));
    router.use('/addCustomer', addCustomer(customers));
    router.use('/updateCustomer', updateCustomer(customers));

    return router;
}

export default CRUDModule;