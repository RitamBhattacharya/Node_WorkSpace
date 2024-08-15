import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
console.log('Environment variables:', process.env);

const app:any = express();
app.use(express.json());

app.get('/', (req:any, res:any):void => {
    res.json('Helllooo');
});

const port = process.env.NODE_PORT || 4000;

app.listen(port, () => {
    console.log(`Server is listening at port no ${port}`);
});
