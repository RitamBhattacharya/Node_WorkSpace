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

    const query = "UPDATE users SET userage=userage+? WHERE username=?";
    const data = [[4, 'Ram'], [-4, 'Shyam']];

    bulkUpdate(connection, query, data)
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


async function bulkUpdate(connection, query, data) {
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