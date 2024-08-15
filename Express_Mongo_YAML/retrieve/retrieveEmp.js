const { error } = require('console');
const express=require('express');
const config=require('yamljs').load('./Express_Mongo_YAML/db.yaml');

async function getEmp(client){
    try {
        await client.connect();

        const db=client.db(config.MONGO_DATABASE);
        const collection=db.collection(config.MONGO_COLLECTION.EMPLOYEE);

        return await collection.find({}).toArray();
    } catch (error) {
        throw error;
    }finally{
        client.close();
    }
}

const retrieveEmp=(client)=>{
    const router=express.Router();

    router.get("/",async (req,res)=>{
        try {
            const data=await getEmp(client);
            res.status(202).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    });

    return router;
}

module.exports=retrieveEmp;
