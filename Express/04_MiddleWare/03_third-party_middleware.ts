import express from 'express';
import morgan from 'morgan';

const app:any=express();

app.use(morgan('tiny'));

app.get('/',(req:any,res:any):void=>{
    res.send('Morgan Demo');
});

app.listen(4000,()=>{
    console.log(`server is listening at localhost 4000`)
});