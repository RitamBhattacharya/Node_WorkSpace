import mysql, { Connection, ConnectionOptions, FieldPacket, QueryResult } from 'mysql2/promise';

async function bulkUpdate(connection:Connection, query:string, data:[number, string][]):Promise<any>{
    const promises:Promise<any>[]=data.map(async (row)=>{
        const [result]:[QueryResult,FieldPacket[]]=await connection.execute(query,row);
        console.log(result);
    })

    await Promise.all(promises);
}

async function main(): Promise<any> {
    //create the connection
    const credentials: ConnectionOptions = {
        host: "localhost",
        user: "root",
        password: "root",
        database: "nodedb"
    };
    const connection: Connection = await mysql.createConnection(credentials);

    //prepare the query
    const query: string = "UPDATE users SET userage=userage+? WHERE username=?";
    const data: [number, string][] = [[4, 'Ram'], [-4, 'Shyam']];

    //execute the query
    await bulkUpdate(connection, query, data);

    //close the connection
    const error = await connection.end();
    if (error != null) {
        throw error;
    }

    console.log('Connection Closed!!!');
}

main().then(() => console.log('Execution Cmpleted.....'));