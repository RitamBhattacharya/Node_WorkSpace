import express from "express"
import Customer from "../../customer";


const getCustomer = (customers:Customer[]) => {
    const router: any = express.Router();

    router.get('/:id', (req: any, res: any) => {
        const customer: Customer | undefined = customers.find(c => c.id === parseInt(req.params.id));
        if (!customer) {
            res.status(404).send("Requested id is not available..");
            return;
        }

        res.status(200).json(customer);

    });

    return router;
}

export default getCustomer;