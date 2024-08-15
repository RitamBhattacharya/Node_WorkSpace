const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodedb"
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting with the database...');
        return;
    }

    const query = "DELETE FROM users WHERE username=?";
    const data = [['Saini'], ['Sam']];

    bulkDelete(connection, query, data)
        .then(() => {
            connection.end((err) => {
                if (err) {
                    console.log('Error at the time of closing connection object...')
                    exit(0);
                }
                else{
                    console.log('Connection Closed!!');
                }
            });
        });
});


async function bulkDelete(connection, query, data) {
    for await (queryData of data) {
        connection.execute(query, queryData, (err, result, fields) => {
            if (err) {
                console.error(`Error updating the elements! ${err.stack}`);
                return;
            }
            console.log(result);
        });
    }
}