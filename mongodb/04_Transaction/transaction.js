const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const dbName = 'nodepractise';
const collectionName = 'users';

async function main() {
    const session = client.startSession();

    session.startTransaction();

    try {
        const collection = client.db(dbName).collection(collectionName);

        const result = await collection.insertOne({ "_id": 11, "username": "Lily", "userage": 27, "userjob": "Architect" });

        await session.commitTransaction();
        console.log('Transaction Committed...');
        console.log(result);
    } catch (error) {
        console.error('Transaction Aborted...');
        session.abortTransaction();
    }finally{
        await session.endSession();
    }
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());