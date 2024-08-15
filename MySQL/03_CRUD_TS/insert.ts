import mysql, { Connection, ConnectionOptions } from 'mysql2';
import { exit } from 'process';

const credentials: ConnectionOptions = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodedb"
}
const connection = mysql.createConnection(credentials);

connection.connect((err: Error | null): void => {
    if (err) {
        console.error('Error Connecting with the Database.....');
        return;
    }

    connection.query('SELECT * FROM USERS', (err: Error | null, result: any, fields: any): void => {
        if (err) {
            console.error(`Error fetching the data: ${err.stack}`);
            return;
        }
        const query:string = "INSERT INTO users(username,userage,userjob) VALUES(?,?,?)";
        const data:[string,number,string][] = [['Saini', 32, 'Coder'], ['Sam', 33, 'Sweeper']];

        bulkInsert(connection, query, data)
            .then(() => {
                connection.end((err:Error|null):void => {
                    if (err) {
                        console.log('Error at the time of closing connection object...')
                        exit(0);
                    }
                    else {
                        console.log('Connection Closed!!');
                    }
                });
            });
    });
});


async function bulkInsert(connection:Connection, query:string, data:[string,number,string][]) {
    for await (const queryData of data) {
        connection.execute(query, queryData, (err:Error|null, result:any, fields:any) => {
            if (err) {
                console.error(`Error updating the elements! ${err.stack}`);
                return;
            }
            console.log(result);
        });
    }
}