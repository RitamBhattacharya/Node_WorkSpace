const express=require('express');
const cookieParser=require('cookie-parser');
require('dotenv').config();

const app=express();

app.use(cookieParser(process.env.SECRET_KEY)); 
app.use(express.json());

app.get("/",(req,res)=>{
    res.json(req.signedCookies);
})

app.get('/setCookie',(req,res)=>{
    res.cookie("username","Ritam",{
        signed:true,
        httpOnly:true
    });
    res.cookie("preference",{
        "theme":"dark",
        "language":"en"
    })

    res.send('Cookies Set');
})

app.get('/clearCookie',(req,res)=>{
    res.clearCookie("username",{signed:true,httpOnly:true});
    res.clearCookie("preference");
    res.send("Cookies deleted");
})

app.listen(4000,()=>{
    console.log('Server Started');
})