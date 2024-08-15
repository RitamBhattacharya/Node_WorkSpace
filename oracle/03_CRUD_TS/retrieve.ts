import oracledb, { Connection } from 'oracledb';

async function main():Promise<any>{
    let connection:Connection|undefined;
    try {
        //create and connect the connection
        connection = await oracledb.getConnection({
            user: 'system',
            password: 'Ritam123',
            connectionString: 'localhost/orcl'
        });

        //prepare the sql query
        const query:string = 'SELECT * FROM dept';

        //execute the query
        const result:any = await connection.execute(query);
        console.log(result.rows);
    } catch (error) {
        console.error(error);
    }finally{
        //close the connection
        if(connection){
            await connection.close();
        }
        console.log('Connection Closed..');
    }
}

main().then(()=>console.log('Execution Successful!'));