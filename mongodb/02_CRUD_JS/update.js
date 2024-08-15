const {MongoClient}=require('mongodb');
const uri="mongodb://localhost:27017";
const client=new MongoClient(uri);

const dbName='nodepractise';
const collectionName='emp';

async function main(){
    await client.connect();
    console.log('Connected Successfully to server...');
    const db=client.db(dbName);
    const collection=db.collection(collectionName);

    //updateOne() method

    //set the salary of DevOps Engineer as 500003
    /*const filter={job:{$eq:'DevOps Engineer'}};
    const update={$set:{salary:50003}};
    const result=await collection.updateOne(filter,update);*/


    //updateMany() method
    
    // 1 .decrease the salary of all employees those are either Software Engineer or DevOps Engineer by 500
    /*const filter={job:{$in:['Software Engineer','DevOps Engineer']}};
    const update={$inc:{salary:-500}};
    const result=await collection.updateMany(filter,update);*/

    // 2. set the salary of employees as 50000 if the actual salary is less than 50000 only where age is not in 32,47,31
    /*const filter={
        salary: { $lt: 50000 }, 
        age: { $nin: [32, 47, 31] }
    };
    const update={$set: { salary: 50000 }};
    const result=await collection.updateMany(filter,update);*/


    //replaceOne() method
    
    /*const filter={job:{$eq:'Network Engineer'}};
    const doc={Experience:4};
    const result=await collection.replaceOne(filter,doc);*/

    console.log(result);

    return "Execution Done...";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(()=>client.close());