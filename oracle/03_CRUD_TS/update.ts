import oracledb , { Connection } from "oracledb";

async function main():Promise<void> {
    let connection:Connection|undefined;
    try {
        //create and connect the connection
        connection = await oracledb.getConnection({
            user: 'system',
            password: 'Ritam123',
            connectionString: 'localhost/orcl'
        });

        //prepare the sql query
        const query:string= 'UPDATE dept SET LOC=:LOC WHERE DEPTNO=:DEPTNO';
        const data:{DEPTNO:number,LOC:string}[]=[{DEPTNO:70,LOC:'NEW YORK'},{DEPTNO:80,LOC:'BOSTON'}];

        //execute the query
        await connection.executeMany (query, data)

        //commit the result
        if(connection){
            await connection.commit();
        }
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