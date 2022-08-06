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

const getNotes = (req, res) => {
    Note.find()
        .exec()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('internal server error');
        });
};

const getNote = (req, res) => {
    Note.findOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send("internal server error");
        }
        res.status(200).send(data);
    })
};

const addNote = (req, res) => {
    let note = new Note({ ...req.body });
    note.save((err) => {
        if (err) {
            console.log(err);
            res.status(500).send('internal server error');
        }
        res.status(201).send('created');
    });
};

module.exports = {
    Note,
    addNote,
    getNotes,
    getNote
};
