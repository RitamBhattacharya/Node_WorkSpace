const express=require('express');
const cookieParser=require('cookie-parser');

const app=express();

app.use(cookieParser());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json(req.cookies);
})

app.get('/setCookie',(req,res)=>{
    res.cookie("username","Ritam",{
        expires:new Date(Date.now()+90000)
    });
    res.cookie("preference",{
        "theme":"dark",
        "language":"en"
    })

    res.send('Cookies Set');
})

app.get('/clearCookie',(req,res)=>{
    res.clearCookie("username");
    res.clearCookie("preference");
    res.send("Cookies deleted");
})

app.listen(4000,()=>{
    console.log('Server Started');
})