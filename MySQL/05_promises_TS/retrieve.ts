import mysql, { Connection, ConnectionOptions, FieldPacket, QueryResult, ResultSetHeader } from 'mysql2/promise';


async function main():Promise<any>{
    
    //create the connection
    const credentials: ConnectionOptions = {
        host: "localhost",
        user: "root",
        password: "root",
        database: "nodedb"
    }
    const connection = await mysql.createConnection(credentials);

    //prepare the query
    const query:string="SELECT * FROM users";
    const data:number[]=[1];

    //execute the query
    const [result]:[QueryResult,FieldPacket[]]=await connection.execute(query,data);

    console.log(result);

    //close the connection
    const error=await connection.end();

    if(error!=null){
        throw error;
    }
    console.log('Connection Closed');
}

main().then(()=>console.log('Execution Completed..'))