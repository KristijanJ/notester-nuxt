const mongoose = require('mongoose');

const NoteCategory = mongoose.model(
    'noteCategory',
    {
        title: String,
        notes: Array
    },
    'note-categories'
);

const getNoteCategories = (req, res) => {
    NoteCategory.find()
        .exec()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('internal server error');
        });
};

const getNoteCategory = (req, res) => {
    NoteCategory.findOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send("internal server error");
        }
        res.status(200).send(data);
    })
};

const addNoteCategory = (req, res) => {
    let note = new NoteCategory({ ...req.body });
    note.save((err) => {
        if (err) {
            console.log(err);
            res.status(500).send('internal server error');
        }
        res.status(201).send('created');
    });
};

module.exports = {
    getNoteCategories,
    getNoteCategory,
    addNoteCategory
};
