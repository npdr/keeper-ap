const db = require("../models/index");
const Note = db.notes;

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