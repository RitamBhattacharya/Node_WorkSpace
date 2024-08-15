const express=require('express');
const config=require('yamljs').load('./Express_Mongo_YAML/db.yaml');

async function getUser(client){
    try {
        await client.connect();

        const db=client.db(config.MONGO_DATABASE);
        const collection=db.collection(config.MONGO_COLLECTION.USER);

        return await collection.find({}).toArray();
    } catch (error) {
        throw error;
    }finally{
        client.close();
    }
}

const retrieveUser=(client)=>{
    const router=express.Router();

    router.get("/",async(req,res)=>{
        try {
            const data = await getUser(client);
            res.status(202).json(data);
        } catch (error) {
            res.status(500).json(err);
        }
    });

    return router;
}

module.exports=retrieveUser;
