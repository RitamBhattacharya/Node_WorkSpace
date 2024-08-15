import express from 'express';
import validate from './Validation';

const app:any = express()

app.use(express.json())

interface Customer {
    id: number,
    name: string,
    rank: string
}

const customers: Customer[] = [
    { id: 1, name: 'Smith', rank: 'Agent' },
    { id: 2, name: 'David', rank: 'Assistant' },
    { id: 3, name: 'Anya', rank: 'Manager' }
]


//API for getting all customer details
app.get('/customers', (req: any, res: any) => {
    res.json(customers);
})


//API for getting a particular customer details based on given customer id
app.get('/customers/:id', (req: any, res: any) => {
    const {value,error}=validate.ValidateParam(req.params);
    
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    const customer:Customer|undefined = customers.find(c => c.id === value.id);
    if(!customer){
        res.status(404).send("Requested id is not available..");
        return;
    }

    res.status(200).json(customer);
   
})


//API for updating a customer details
app.put('/customers/:id', (req: any, res: any) => {
 
    var {value,error}=validate.ValidateParam(req.params);

    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    const target:number=value.id;

    var {value,error}=validate.ValidateBody(req.body);

    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    const updatedCustomer : Customer = {
        id:target,
        name:value.name,
        rank:value.rank
    };

    const index:number = customers.findIndex(c => c.id === target);
    customers[index] = updatedCustomer;
    res.status(202).json(updatedCustomer);
})


//API for adding a new customer
app.post('/customers', (req: any, res: any) => {

    const {value,error}=validate.ValidateBody(req.body);

    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    const newCustomer: Customer = {
        id:customers.length+1,
        name:value.name,
        rank:value.rank
    }
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
})


// API for deleting a customer details based on given customer id
app.delete('/customers/:id', (req: any, res: any) => {
    const {value,error}=validate.ValidateParam(req.params);
    
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    const index:number = customers.findIndex(c => c.id === value.id);
    const deletedCustomer = customers.splice(index, 1)[0];
    res.status(202).json(deletedCustomer);
})


app.listen(4000, () => {
    console.log('server is listening at port 4000')
})