const { error } = require('console');
const express=require('express');
const { UserIdentificationSchema } = require('../Validation/user-validation');
const config=require('yamljs').load('./Express_Mongo_YAML/db.yaml');

async function deleteUser(client,value){
    try {
        await client.connect();

        const db=client.db(config.MONGO_DATABASE);
        const collection=db.collection(config.MONGO_COLLECTION.USER);

        return await collection.deleteOne(value);
    } catch (error) {
        throw error;
    }finally{
        client.close();
    }
}

const deleteUserModule=(client)=>{
    const router=express.Router();

    router.delete("/:id",async (req,res)=>{
        try {
            const {value,error}=UserIdentificationSchema.validate({"_id":req.params.id});
            if(error){
                res.status(400).send(error.details[0].message);
                return;
            }
            const data=await deleteUser(client,value);
            res.status(202).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    });

    return router;
}

module.exports=deleteUserModule;
