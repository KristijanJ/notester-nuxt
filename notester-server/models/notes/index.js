const mongoose = require('mongoose');

const Note = mongoose.model(
    'note',
    {
        title: String,
        notes: String,
        starred: Boolean,
    },
    'notes'
);

const getNotes = async (req, res) => {
    try {
        const notes = await Note.find().exec();
        res.status(200).send(notes);
    } catch (error) {
        console.log(error);
        res.status(500).send('internal server error');
    }
};

const getNote = async (req, res) => {
    try {
        const note = await Note.findOne({ _id: req.params.id }).exec();
        res.status(200).send(note);
    } catch (error) {
        console.log(error);
        res.status(500).send("internal server error");
    }
};

const addNote = async (req, res) => {
    try {
        const note = new Note({ ...req.body });
        await note.save();
        res.status(201).send('created');
    } catch (error) {
        console.log(error);
        res.status(500).send('internal server error');
    }
};

module.exports = {
    Note,
    addNote,
    getNotes,
    getNote
};
