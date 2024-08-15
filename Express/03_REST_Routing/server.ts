import express from "express";
import Customer from "./customer";
import CRUDModule from "./CRUD/crud-module";

const app:any=express();

app.use(express.json());

const customers: Customer[] = [
    { id: 1, name: 'Smith', rank: 'Agent' },
    { id: 2, name: 'David', rank: 'Assistant' },
    { id: 3, name: 'Anya', rank: 'Manager' }
]

app.use('/',CRUDModule(customers));

app.listen(4000, () => {
    console.log('server is listening at port 4000')
})