import express from "express";
const app:any=express();

function Logger(req:any,res:any,next:any):void{
    console.log('Logging...');
    next();
}

function Auth(req:any,res:any,next:any):void{
    console.log('Authentication...');
    next();
}

app.get('/',[Logger],(req:any,res:any):void=>{
    res.send('Resonse Generated......');
})

app.get('/welcome',[Auth],(req:any,res:any):void=>{
    res.send('Welcome to Middleware......');
})

app.listen(4000, () => {
    console.log('server is listening at port 4000')
})