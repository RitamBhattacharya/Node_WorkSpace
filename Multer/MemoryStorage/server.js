const express = require('express')
require('dotenv').config();
const multer = require('multer');
const path = require('path');
const { MongoClient } = require('mongodb');

//Connection URI
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

//Database Name
const dbName = "nodepractise";

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024 // 2 MB
    },
    fileFilter: (req, file, next) => {
        if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
            return next(new Error('Only images are allowed'), false);
        }
        next(null, true);
    }
});

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get("/mongoimages", (req, res) => {
    res.sendFile(__dirname + "/images.html");
})

async function store_image(image_data) {
    await client.connect();
    console.log('Connected Successfully to server...');
    const db = client.db(dbName);
    const collection = db.collection("image_storage");

    const result = await collection.insertOne(image_data);

    return result;
}

app.post("/form", upload.single('photo'), async (req, res, next) => {
    try {
        const image = req.file.buffer;
        const base64_image = image.toString('base64');

        const final_image = {
            contentType: req.file.mimetype,
            image: base64_image
        }

        const result = await store_image(final_image);

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
})


async function getAllImages(){
    await client.connect();
    console.log('Connected Successfully to server...');
    const db = client.db(dbName);
    const collection = db.collection("image_storage");

    const result = await collection.find({}).toArray();

    return result;
}

app.get("/images",async (req,res)=>{
    const result=await getAllImages();
    res.status(200).json(result);
})

const port = process.env.NODE_PORT || 4000;
app.listen(port, () => {
    console.log(`Server is listening at port no :${port}`);
})