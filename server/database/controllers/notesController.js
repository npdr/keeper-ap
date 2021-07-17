const db = require("../models");
const Note = db.notes;

exports.findAll = (req, res) => {
    Note.find({}).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        })
}

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Note
    const note = new Note({
        id: req.body.id,
        title: req.body.title,
        content: req.body.content,
        published: req.body.published ? req.body.published : false
    });

    // Save Note in the database
    note
        .save(note)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};

exports.remove = (req, res) => {
    const id = req.params.id;

    Note.findOneAndRemove({id: id})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete note with id=${id}. Maybe note was not found!`
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send(err);
        });
};