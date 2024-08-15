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
        const query = 'INSERT INTO dept values(:DEPTNO,:DNAME,:LOC)';
        const data=[{DEPTNO:60,DNAME:'RESEARCH',LOC:'NEW YORK'},{DEPTNO:70,DNAME:'SALES',LOC:'DALLAS'},{DEPTNO:80,DNAME:'ACCOUTING',LOC:'LA'}];

        //execute the query
        await connection.executeMany(query,data);

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