const mysql=require('mysql2');

//create the connection object
const connection=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodedb"
});

//connect to the database
connection.connect((err)=>{
    if(err){
        console.log('Error Connecting with the database...');
        return;
    }
});

//step 1: Initialize the Transaction
connection.beginTransaction((err)=>{
    if(err) throw err;

    const query = "INSERT INTO users(username,userage,userjob) VALUES(?,?,?)";
    const data = ['Saini', 32, 'Coder'];

    //step:2 Execute the Query
    connection.query(query,data,(err,result)=>{
        if(err){
            return connection.rollback(()=> {throw err;});
        }else{
            // step:3 commit the changes
            connection.commit((err)=>{
                if(err){
                    return connection.rollback(()=>{throw err;})
                }else{
                    // step:4 check the database [this is optional]
                    connection.query(`SELECT * FROM users WHERE userid=${result.insertId}`,(err,result)=>{
                        if(err) throw err;
                        console.log(result);

                        //step 5: close the connection
                        connection.end((err)=>{
                            if(err) throw err;
                            console.log('Connection Closed!');
                        });
                    });
                }
            });
        }
    });
});


