import mysql, { Connection, ConnectionOptions, FieldPacket, QueryResult } from 'mysql2/promise';

async function bulkDelete(connection: Connection, query: string, data:[string][]): Promise<any> {
    const promises: Promise<any>[] = data.map(async (row) => {
        const [result]: [QueryResult, FieldPacket[]] = await connection.execute(query, row);
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
    const query: string = "DELETE FROM users WHERE username=?";
    const data: [string][] = [['Saini'], ['Sam']];

    //execute the query
    await bulkDelete(connection, query, data);

    //close the connection
    const error = await connection.end();
    if (error != null) {
        throw error;
    }

    console.log('Connection Closed!!!');
}

main().then(() => console.log('Execution Cmpleted.....'));