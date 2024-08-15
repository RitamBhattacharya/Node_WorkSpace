const express=require('express')
require('dotenv').config();
const multer=require('multer');
const path=require('path');

const storage=multer.diskStorage({
    destination:(req,file,next)=>{
        next(null,'Multer/Multiple_File_Handling/uploads/');
    },
    filename:(req,file,next)=>{
        next(null,`${file.fieldname}-${Date.now()}${path.parse(file.originalname).ext}`);
    }
});

const upload=multer({
    storage:storage,
    limits:{
        fileSize:2*1024*1024 // 2 MB
    },
    fileFilter:(req,file,next)=>{
        if(!file.originalname.match(/\.(jpg|png|jpeg)$/)){
            return next(new Error('Only images are allowed'),false);
        }
        next(null,true);
    }
});

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})


app.post("/form",upload.array('photo',10),(req,res,next)=>{
    const file=req.files;
    if(!file){
        const error=new Error('Please attach image...');
        error.statusCode=400;
        return next(error);
    }
    res.send('Uploaded');
})


const port=process.env.NODE_PORT||4000;
app.listen(port,()=>{
    console.log(`Server is listening at port no :${port}`);
})