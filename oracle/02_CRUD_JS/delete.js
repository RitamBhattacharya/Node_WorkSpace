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
        const query = 'DELETE FROM dept WHERE DEPTNO=:DEPTNO';
        const data=[{DEPTNO:60},{DEPTNO:70},{DEPTNO:80}];

        //execute the query
        await connection.executeMany (query, data);

        //commit the result
        await connection.commit();
    } catch (error) {
        console.error(error);
        await connection.rollback();
    }finally{
        //close the connection
        await connection.close();
        console.log('Connection Closed..');
    }
}

main().then(()=>console.log('Execution Successful!'));