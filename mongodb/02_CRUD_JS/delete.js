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

    // delete all data
    //const result=await collection.deleteMany({});

    //delete all data where userage<30
    //const result=await collection.deleteMany({userage:{$lt:30}});

    //delete all data where userage>=30
    //const result=await collection.deleteMany({userage:{$gte:30}});

    //delete the first data where userage<30
    //const result=await collection.deleteOne({userage:{$lt:30}});

    //delete the first data whete userage>=30
    //const result=await collection.deleteOne({userage:{$gte:30}});

    console.log(result);

    return "Execution Done...";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());