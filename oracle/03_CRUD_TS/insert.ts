import oracledb, { Connection } from 'oracledb';

async function main(): Promise<void> {
    let connection: Connection | undefined;
    try {
        // Create and connect the connection
        connection = await oracledb.getConnection({
            user: 'system',
            password: 'Ritam123',
            connectionString: 'localhost/orcl'
        });

        // Prepare the SQL query
        const query: string = 'INSERT INTO dept values(:DEPTNO, :DNAME, :LOC)';
        const data: { DEPTNO: number, DNAME: string, LOC: string }[] = [
            { DEPTNO: 60, DNAME: 'RESEARCH', LOC: 'NEW YORK' },
            { DEPTNO: 70, DNAME: 'SALES', LOC: 'DALLAS' },
            { DEPTNO: 80, DNAME: 'ACCOUNTING', LOC: 'LA' }
        ];

        // Execute the query
        await connection.executeMany (query, data)

        // Commit the result
        if (connection) {
            await connection.commit();
        }
    } catch (error) {
        console.error(error);
        if (connection) {
            await connection.rollback();
        }
    } finally {
        // Close the connection if it was created
        if (connection) {
            await connection.close();
            console.log('Connection Closed..');
        }
    }
}

main().then(() => console.log('Execution Successful!')).catch(console.error);
