const { date } = require('joi');
const mysql=require('mysql2');

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"nodedb"
});

connection.connect((err)=>{
    if(err){
        console.error('Error connecting with the database...');
        return;
    }

    const query="SELECT * FROM users WHERE username=?";
    data=['Ram'];

    const sql=connection.format(query,data);
    console.log(sql);

    connection.query(sql,(err,result,fields)=>{
        if(err){
            console.error(`Error fetching the data: ${err.stack}`);
            return;
        }
        console.log(result);

        connection.end((err)=>{
            if(err){
                console.log('Error at the time of closing connection object...')
                exit(0);
            }
        });
    });

    
});