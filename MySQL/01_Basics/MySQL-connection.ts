import express from 'express';
import mysql, { ConnectionOptions } from 'mysql2';

import dotenv from 'dotenv';
import { exit } from 'process';
dotenv.config();

const app:any=express();

const credentials:ConnectionOptions={
    host:"localhost",
    user:"root",
    password:"root",
    database:"nodedb" 
}
const connection=mysql.createConnection(credentials);

connection.connect((err:any):void=>{
    if(err){
        console.error('Error Connecting with the Database.....');
        return;
    }
    console.log(`Connection Established ar id ${connection.threadId}`);

    connection.end((err:any):void=>{
        if(err){
            console.log('Error at the time of closing the connection!!');
            exit(0);
        }
    });
});

const port=process.env.NODE_PORT||4000;

app.listen(port,()=>{
    console.log(`server is listening at port no:  ${port}`);
})
