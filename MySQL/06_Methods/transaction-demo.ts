import mysql, { Connection, ConnectionOptions, FieldPacket, QueryResult, ResultSetHeader } from 'mysql2/promise';

async function main(): Promise<any> {
    //create the connection
    const credentials: ConnectionOptions = {
        host: "localhost",
        user: "root",
        password: "root",
        database: "nodedb"
    }
    const connection: Connection = await mysql.createConnection(credentials);


    try {
        //initialize the transaction
        await connection.beginTransaction();

        const query: string = "INSERT INTO users(username, userage, userjob) VALUES (?, ?, ?)";
        const data: [string, number, string] = ['Saini', 32, 'Coder'];

        //execute the query
        const [result]: [ResultSetHeader, FieldPacket[]] = await connection.query(query, data);
        console.log(result);

        //commit the changes
        await connection.commit();

        // check the database [this is optional]
        const [row]: [QueryResult, FieldPacket[]] = await connection.query(`SELECT * FROM users WHERE userid=?`, [result.insertId]);
        console.log(row);

    } catch (error) {
        // Rollback the transaction in case of error
        await connection.rollback();
        console.error('Transaction rolled back due to an error:', error);
    }
    finally{
        //close the connection
        const error = await connection.end();

        if (error != null) {
            throw error;
        }
        console.log('Connection Closed');
    }
}

main().then(()=>console.log('Executed Successfullly.....'));