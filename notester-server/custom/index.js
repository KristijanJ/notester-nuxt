const notes = require('../models/notes/index');
const noteCategory = require('../models/noteCategory/index');

const getNoteCategoriesWithNotes = (req, res) => {
    noteCategory.NoteCategory.find()
        .exec()
        .then(async (categories) => {
            for (const category of categories) {
                const notes = await getNotesForCategory(category)
                category.notes = notes;
            }
            res.status(200).send(categories);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('internal server error');
        });
};

const getNotesForCategory = (category) => {
    return new Promise((success, fail) => {
        notes.Note.find({ _id: { $in: category.notes } }, (err, data) => {
            if (err) {
                return fail(err);
            }
            return success(data);
        })
    });
}

module.exports = {
    getNoteCategoriesWithNotes
}