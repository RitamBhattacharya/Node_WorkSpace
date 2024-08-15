import { Collection, Db, MongoClient, WithId } from 'mongodb';

const uri:string="mongodb://localhost:27017";
const client:MongoClient=new MongoClient(uri);

const dbName:string='nodepractise';
const collectionName:string='users';

async function main():Promise<string>{
    await client.connect();
    console.log('Connected Successfully to server...');
    const db:Db=client.db(dbName);
    const collection:Collection=db.collection(collectionName);

    const findResult:WithId<any>[]=await collection.find({}).toArray();

    console.log(findResult);

    return "Execution Done...";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());