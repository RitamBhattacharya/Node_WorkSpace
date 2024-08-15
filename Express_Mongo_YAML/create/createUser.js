const { error } = require('console');
const express=require('express');
const { UserCreateSchema } = require('../Validation/user-validation');
const config=require('yamljs').load("Express_Mongo_YAML/db.yaml");

async function createUser(client,data){
    try {
        await client.connect();

        const db=client.db(config.MONGO_DATABASE);
        const collection=db.collection(config.MONGO_COLLECTION.USER);

        return await collection.insertMany(data);
    } catch (error) {
        throw error;
    }finally{
        client.close();
    }
}

const createUserModule=(client)=>{
    const router=express.Router();

    router.post("/",async (req,res)=>{
        try {
            const {value,error}=UserCreateSchema.validate(req.body);
            if(error){
                res.status(400).send(error.details[0].message);
                return;
            }
            const data=await createUser(client,value);
            res.status(202).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    });

    return router;
}

module.exports=createUserModule;
