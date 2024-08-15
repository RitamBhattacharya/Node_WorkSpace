import oracledb from 'oracledb';

async function main():Promise<void>{

    let connection: any;

    try {
        // create and connect the connection
        connection= await oracledb.getConnection({
            user: 'system',
            password: 'Ritam123',
            connectionString: 'localhost/orcl'
        });

        console.log('Connected..');
    } catch (error) {
        console.error(error);
        console.error('Coonection Failed');
    }finally{
        await connection.close();
        console.log('Connection Closed...');
    }
}

main();