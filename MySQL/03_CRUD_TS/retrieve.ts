import mysql, { ConnectionOptions } from 'mysql2';
import { exit } from 'process';

const credentials: ConnectionOptions = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodedb"
}
const connection = mysql.createConnection(credentials);

connection.connect((err: Error|null): void => {
    if (err) {
        console.error('Error Connecting with the Database.....');
        return;
    }

    connection.query('SELECT * FROM USERS', (err:Error|null, result:any, fields:any):void => {
        if (err) {
            console.error(`Error fetching the data: ${err.stack}`);
            return;
        }
        console.log(result);

        connection.end((err:Error|null):void => {
            if (err) {
                console.log('Error at the time of closing connection object...')
                exit(0);
            }
        });
    });
});


