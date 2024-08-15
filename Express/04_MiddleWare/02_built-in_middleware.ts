import express from "express";
const app:any=express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.get('/',(req:any,res:any):void=>{
    res.send('Resonse Generated......');
})

app.post('/',(req:any,res:any):void=>{
    res.send(req.body);
})


app.listen(4000, () => {
    console.log('server is listening at port 4000')
})