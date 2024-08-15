const oracledb = require('oracledb');

async function main() {
    try {
        await oracledb.createPool({
            user: 'system',
            password: 'Ritam123',
            connectionString: 'localhost/orcl',
            poolMin: 10,
            poolMax: 10,
            poolIncrement: 0
        });

        const connection = await oracledb.getConnection();

        const query = 'SELECT * FROM dept';
        const result = await connection.execute(query);
        console.log(result.rows);
    } catch (error) {
        console.error(error);
        await connection.rollback();
    } finally {
        //close the connection
        await oracledb.getPool().close(1);
        console.log('Connection Closed..');
    }
}

main();