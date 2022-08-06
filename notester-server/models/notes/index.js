const mongoose = require('mongoose');

const Note = mongoose.model(
    'note',
    {
        title: String,
        content: String,
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

const addNote = (req, res) => {
    addNoteService({ ...req.body })
        .then(() => {
            res.status(201).send('created');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('internal server error');
        });
};

const addNoteService = (data) => {
    return new Promise((success, fail) => {
        let note = new Note(data);
        note.save((err) => {
            if (err) {
                return fail(err);
            }
            return success();
        });
    });
};

module.exports = {
    addNote,
    getNotes,
};
