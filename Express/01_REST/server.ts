import express from 'express';
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

app.get('/customers', (req: any, res: any) => {
    res.json(customers);
})


app.get('/customers/:id', (req: any, res: any) => {
    const customer:Customer|undefined = customers.find(c => c.id === parseInt(req.params.id));
    
    if(!customer){
        res.status(404).send("Requested id is not available..");
        return;
    }

    res.status(200).json(customer);
})


app.put('/customers/:id', (req: any, res: any) => {
    const target:number = parseInt(req.params.id);

    if(!(req?.body?.name && req?.body?.rank)){
        res.status(400).send('Not Enough Info');
        return;
    }

    const updatedCustomer : Customer = {
        id:target,
        name:req.body.name,
        rank:req.body.rank
    };

    const index:number = customers.findIndex(c => c.id === target);
    customers[index] = updatedCustomer;
    res.status(202).json(updatedCustomer);
})


app.post('/customers', (req: any, res: any) => {
    if(!(req?.body?.name && req?.body?.rank)){
        res.status(400).send('Not Enough Info');
        return;
    }
    const newCustomer: Customer = {
        id:customers.length+1,
        name:req.body.name,
        rank:req.body.rank
    }
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
})


app.delete('/customers/:id', (req: any, res: any) => {
    const id:number = parseInt(req.params.id);
    const index:number = customers.findIndex(c => c.id === id);
    const deletedCustomer = customers.splice(index, 1)[0];
    res.status(202).json(deletedCustomer);
})

app.listen(4000, () => {
    console.log('server is listening at port 4000')
})