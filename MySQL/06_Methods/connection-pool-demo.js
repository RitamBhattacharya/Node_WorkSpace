const mysql=require('mysql2');

//create the connection
const connection=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"nodedb",
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
});


//Execute the query
connection.query('SELECT * FROM users',(err,result)=>{
    if(err) throw err;
    console.log(result);

    connection.end((err)=>{
        if(err) throw err;
        console.log('Pool Released...');
    })
})