const express=require('express')
require('dotenv').config();
const multer=require('multer');

const storage=multer.diskStorage({
    destination:(req,file,next)=>{
        next(null,'Multer/Single_File_Handling/uploads/');
    },
    filename:(req,file,next)=>{
        next(null,`${file.fieldname}-${Date.now()}.jpg`);
    }
});

const upload=multer({storage:storage});

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})


app.post("/form",upload.single('photo'),(req,res)=>{
    res.status(200).json(req.body);
})


const port=process.env.NODE_PORT||4000;
app.listen(port,()=>{
    console.log(`Server is listening at port no :${port}`);
})