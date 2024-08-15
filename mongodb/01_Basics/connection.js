const {MongoClient}=require('mongodb');

//Connection URI
const uri='mongodb://localhost:27017';
const client=new MongoClient(uri);

//Database Name
const dbName="nodeprctise";

async function main(){
    //use connect method to connect to the server
    await client.connect();
    console.log('Connected Successfully to server...');
    const db=client.db('nodepractise');
    const collection=db.collection('users');

    const findResult=await collection.find({}).toArray();
    console.log(findResult);

    return "Execution Done...";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());