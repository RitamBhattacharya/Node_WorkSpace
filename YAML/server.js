const {MongoClient}=require('mongodb');
require('dotenv').config();
const config=require('yamljs').load('YAML/db.yaml');


//Connection URI
const uri=process.env.URI;
const client=new MongoClient(uri);

//Database Name
const dbName=config.database.dbName;

//collection Name
const collectionName=config.database.collectionName;

async function main(){
    //use connect method to connect to the server
    await client.connect();
    console.log('Connected Successfully to server...');
    const db=client.db(dbName);
    const collection=db.collection(collectionName);

    const findResult=await collection.find({}).toArray();
    console.log(findResult);

    return "Execution Done...";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());