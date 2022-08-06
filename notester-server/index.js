const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3030;
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
});
database.once('connected', () => {
    console.log('Database Connected');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})