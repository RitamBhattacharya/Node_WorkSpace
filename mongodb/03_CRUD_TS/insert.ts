import { Collection, Db, InsertOneResult, MongoClient, ObjectId, WithId } from 'mongodb';

const uri:string="mongodb://localhost:27017";
const client:MongoClient=new MongoClient(uri);

const dbName:string='nodepractise';
const collectionName:string='users';

async function main():Promise<string>{
    await client.connect();
    console.log('Connected Successfully to server...');
    const db:Db=client.db(dbName);
    const collection:Collection=db.collection(collectionName);

    //insertOne() method
    const result = await collection.insertOne({ _id:ObjectId.createFromTime(11), username: "Lily", userage: 27, userjob: "Architect" });


    console.log(result);

    return "Execution Done...";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());