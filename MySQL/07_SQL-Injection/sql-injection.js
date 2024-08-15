const mysql = require('mysql2');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodedb"
});

rl.question("Enter the user name :", (name) => {

    connection.connect((err) => {
        if (err) {
            console.error('Error connecting with the database...');
            return;
        }

        const query = "SELECT * FROM users WHERE username=?";
        const sql=connection.format(query,name);
        console.log(sql);

        connection.execute(sql, (err, result, fields) => {
            if (err) {
                console.error(`Error fetching the data: ${err.stack}`);
                return;
            }
            console.log(result);

            connection.end((err) => {
                if (err) {
                    console.log('Error at the time of closing connection object...')
                    exit(0);
                }
            });
        });

    });

    rl.close();
})

/*
SQL Injection Attack:
---------------------
Enter the user name :Ram' OR '1'='1
[
  { userid: 1, username: 'Ram', userage: 59, userjob: 'CEO' },
  { userid: 2, username: 'Shyam', userage: -19, userjob: 'Chairman' },
  { userid: 3, username: 'Madhu', userage: 22, userjob: 'Sweeper' },
  { userid: 4, username: 'Jadu', userage: 23, userjob: 'Manager' }
]
*/