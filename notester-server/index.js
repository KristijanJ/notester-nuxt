const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const notes = require('./models/notes/index');

const app = express();
const port = 3031;
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
});
database.once('connected', () => {
    console.log('Database Connected');
});

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/v1/notes', notes.getNotes);
app.post('/api/v1/notes', notes.addNote);

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