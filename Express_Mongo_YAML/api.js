const express=require('express');
const retrieveModule = require('./retrieve/retrieve-module');
const { MongoClient } = require('mongodb');
const createModule = require('./create/create-module');
const deleteModule = require('./delete/delete-module');
const UpdateModule = require('./update/update-module');
require('dotenv').config();

const app=express();
app.use(express.json());

const URI=process.env.URI;
const client=new MongoClient(URI);

app.use("/retrieve",retrieveModule(client));
app.use("/create",createModule(client));
app.use("/delete",deleteModule(client));
app.use("/update",UpdateModule(client));

const port=process.env.NODE_PORT||4000;
app.listen(port,()=>{
    console.log(`Server is listening at port no :${port}`);
})