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

    // retrieve all data
    //const findResult=await collection.find({}).toArray();

    //retrieve all data where userage<30
    //const findResult=await collection.find({userage:{$lt:30}}).toArray();

    //retrieve all data where userage>=30
    //const findResult=await collection.find({userage:{$gte:30}}).toArray();

    //retrieve the first data where userage<30
    //const findResult=await collection.findOne({userage:{$lt:30}});

    //retrieve the first data whete userage>=30
    //const findResult=await collection.findOne({userage:{$gte:30}});

    console.log(findResult);

    return "Execution Done...";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());