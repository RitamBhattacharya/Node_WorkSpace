const mysql = require('mysql2/promise');

async function bulkDelete(connection, query, data) {
    const promise = data.map(async (row)=>{
        const result=row = await connection.execute(query, row);
        console.log(result[0]);
    });
    await Promise.all(promise);
}

async function main() {

    //create the connection
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "nodedb"
    });

    //prepare the query
    const query = "DELETE FROM users WHERE username=?";
    const data = [['Saini'], ['Sam']];

    //execute the query
    try {
        await bulkDelete(connection, query, data);
    } catch (error) {
        throw error;
    }

    //close the connection
    const error = await connection.end();

    if (error != null) {
        throw error;
    }
    console.log('Connection Closed');
}

main().then(() => console.log('Execution Completed..'));