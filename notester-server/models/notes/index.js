const mongoose = require('mongoose');
const noteCategory = require('../noteCategory/index');

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

        await noteCategory.NoteCategory.updateOne({ _id: '62ee7a728a466db404301d17' }, { $push: { notes: note._id } });

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
