const { error } = require('console');
const express=require('express');
const { EmpCreateSchema } = require('../Validation/emp-validation');
const config=require('yamljs').load("Express_Mongo_YAML/db.yaml");

async function createEmp(client,data){
    try {
        await client.connect();

        const db=client.db(config.MONGO_DATABASE);
        const collection=db.collection(config.MONGO_COLLECTION.EMPLOYEE);

        return await collection.insertMany(data);
    } catch (error) {
        throw error;
    }finally{
        client.close();
    }
}

const createEmpModule=(client)=>{
    const router=express.Router();

    router.post("/",async (req,res)=>{
        try {
            const {value,error}=EmpCreateSchema.validate(req.body);
            if(error){
                res.status(400).send(error.details[0].message);
                return;
            }
            const data=await createEmp(client,value);
            res.status(202).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    });

    return router;
}

module.exports=createEmpModule;
