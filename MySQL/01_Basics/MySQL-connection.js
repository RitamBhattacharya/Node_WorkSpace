const express=require('express');
const mysql=require('mysql2');

require('dotenv').config();

const app=express();

const connnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"nodedb"
});

connnection.connect((err)=>{
    if(err){
        console.error('Error Connecting with the Database...');
        return;
    }
    console.log(`Connection Established!!! at id:${connnection.threadId}`);

    connnection.end((err)=>{
        if(err){
            console.log('Error at the time of closing connection object...')
            exit(0);
        }
    });
});

const port=process.env.NODE_PORT||4000;

app.listen(port,()=>{
    console.log(`server is listening at port no ${port}`);
})
