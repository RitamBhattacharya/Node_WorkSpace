const {MongoClient}=require('mongodb');
const uri="mongodb://localhost:27017";
const client=new MongoClient(uri,{
    minPoolSize:10,
    maxPoolSize:10,
    waitQueueTimeoutMS:10000
});

const dbName='nodepractise';
const collectionName='users';

async function main(){
    const db=client.db(dbName);
    const collection=db.collection(collectionName);

    // retrieve all data
    const findResult=await collection.find({}).toArray();

    console.log(findResult);

    return "Execution Done...";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());