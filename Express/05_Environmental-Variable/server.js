const express=require('express');
const dotenv=require('dotenv');

// Load environment variables from .env file
dotenv.config();
//console.log('Environment variables:', process.env);

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json('Helllooo');
});

const port = process.env.NODE_PORT || 4000;

app.listen(port, () => {
    console.log(`Server is listening at port no ${port}`);
});
