const fs=require('fs');
const {MongoClient}=require('mongodb');
const uri="mongodb://localhost:27017";
const client=new MongoClient(uri);

const dbName='nodepractise';
const collectionName='users';


async function main(){
    await client.connect();
    console.log('Connected Successfully to server...');
    const db=client.db(dbName);
    const collection=db.collection(collectionName);

    //insertOne() method
    //const result=await collection.insertOne({"_id": 11,"username": "Lily","userage": 27,"userjob": "Architect"});

    //insertMany() method
    const data=fs.readFileSync('data.json');
    const result=await collection.insertMany(JSON.parse(data));

    console.log(result);

    return "Execution Done...";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());