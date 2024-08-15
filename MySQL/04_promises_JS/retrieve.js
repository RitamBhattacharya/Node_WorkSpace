const mysql=require('mysql2/promise');


async function main(){
    
    //create the connection
    const connection= await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root",
        database:"nodedb"
    });

    //prepare the query
    const query="SELECT * FROM users WHERE userid=?";
    const data=[1];

    //execute the query
    const result=await connection.execute(query,data);

    if(result instanceof Error){
        throw result;
    }
    console.log(result[0]);

    //close the connection
    const error=await connection.end();

    if(error!=null){
        throw error;
    }
    console.log('Connection Closed');
}

main().then(()=>console.log('Execution Completed..'))