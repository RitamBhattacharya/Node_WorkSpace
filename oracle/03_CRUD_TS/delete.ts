import oracledb, { Connection } from 'oracledb';

async function main():Promise<any> {
    let connection:Connection|undefined;
    try {
        //create and connect the connection
        connection = await oracledb.getConnection({
            user: 'system',
            password: 'Ritam123',
            connectionString: 'localhost/orcl'
        });

        //prepare the sql query
        const query:string = 'DELETE FROM dept WHERE DEPTNO=:DEPTNO';
        const data:{DEPTNO:number}[]=[{DEPTNO:60},{DEPTNO:70},{DEPTNO:80}];

        //execute the query
        await connection.executeMany (query, data);

        //commit the result
        await connection.commit();
    } catch (error) {
        console.error(error);
        if(connection){
            await connection.rollback();
        }
    }finally{
        //close the connection
        if(connection){
            await connection.close();
        }
        console.log('Connection Closed..');
    }
}

main().then(()=>console.log('Execution Successful!'));