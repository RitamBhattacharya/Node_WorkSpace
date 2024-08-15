const oracledb = require('oracledb');

async function main() {
    let connection;

    try {
        //create & connect the connection
        connection = await oracledb.getConnection({
            user: 'system',
            password: 'Ritam123',
            connectionString: 'localhost/orcl'
        });

        console.log("Connected");

    } catch (error) {
        console.error(error);
    }finally{
        //close the connection
        await connection.close();
        console.log('Connection Closed...');
    }

}

main();
