const express=require('express')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
require('dotenv').config();

async function hashPasswrd(pwd){
    const salt=await bcrypt.genSalt(10);
    const hashed_pwd=await bcrypt.hash(pwd,salt);
    return hashed_pwd;
}

const app=express();
app.use(express.json());

let hpwd="";

app.post('/register',async (req,res)=>{
    const pwd=await hashPasswrd(req.body?.password);
    
    const resp={
        email:req.body?.email,
        password:pwd
    }
    const token=jwt.sign(resp,process.env.SECRET_KEY);
    //store in database
    hpwd=resp;

    res.json({token:token});
})

app.post('/login',async(req,res)=>{
    //fetch from mongodb 
    if(req.body?.email===hpwd.email){
        const validate=await bcrypt.compare(req.body?.password,hpwd.password);
        if(validate){
            res.status(200).send("success");
        }else{
            res.status(401).send("failed");
        }
    }
})

app.post('/existinglogin',(req,res)=>{

    if(!req.body?.token){
        res.status(401).send('No Token');
    }

    jwt.verify(req.body?.token,process.env.SECRET_KEY,(err,data)=>{
        if(err){
            res.status(403).send('Token Invalid');
            return;
        }
        res.status(200).json(data);
    })
});

app.listen(4000,()=>{
    console.log('Server Started...');
});