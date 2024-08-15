const oracledb = require('oracledb');

async function main() {
    let connection;
    try {
        //create and connect the connection
        connection = await oracledb.getConnection({
            user: 'system',
            password: 'Ritam123',
            connectionString: 'localhost/orcl'
        });

        //prepare the sql query
        const query = 'SELECT * FROM dept';

        //execute the query
        const result = await connection.execute(query);
        console.log(result.rows);
    } catch (error) {
        console.error(error);
    }finally{
        //close the connection
        await connection.close();
        console.log('Connection Closed..');
    }
}

main().then(()=>console.log('Execution Successful!'));