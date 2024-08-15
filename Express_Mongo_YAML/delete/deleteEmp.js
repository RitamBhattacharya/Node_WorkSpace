const { error } = require('console');
const express=require('express');
const { EmpIdentificationSchema } = require('../Validation/emp-validation');
const config=require('yamljs').load('./Express_Mongo_YAML/db.yaml');

async function deleteEmp(client,value){
    try {
        await client.connect();

        const db=client.db(config.MONGO_DATABASE);
        const collection=db.collection(config.MONGO_COLLECTION.EMPLOYEE);

        return await collection.deleteOne(value);
    } catch (error) {
        throw error;
    }finally{
        client.close();
    }
}

const deleteEmpModule=(client)=>{
    const router=express.Router();

    router.delete("/:id",async (req,res)=>{
        try {
            const {value,error}=EmpIdentificationSchema.validate({_id:req.params.id});
            if(error){
                res.status(400).send(error.details[0].message);
                return;
            }
            const data=await deleteEmp(client,value);
            res.status(202).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    });

    return router;
}

module.exports=deleteEmpModule;
