const mysql = require('mysql2/promise');

async function bulkInsert(connection, query, data) {
    const promise = data.map( async (row) => {
        const resut=await connection.execute(query, row);
        console.log(resut[0]);
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
    const query = "INSERT INTO users(username,userage,userjob) VALUES(?,?,?)";
    const data = [['Saini', 32, 'Coder'], ['Sam', 33, 'Sweeper']];

    //execute the query
    try {
        await bulkInsert(connection, query, data);
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

main().then(() => console.log('Execution Completed..'))