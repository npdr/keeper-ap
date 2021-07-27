const express = require('express');
const Note = require('../models/note');
const User = require('../models/user');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();
router.use(authMiddleware);

router.post('/', async (req, res) => {
    try {
        const note = await Note.create({
            id: req.body.id,
            title: req.body.title,
            content: req.body.content,
            user: req.userId,
        });

        await User.findByIdAndUpdate(req.userId, {
            $push: {
                notes: note
            }
        });

        return res.send({
            message: 'Note successfully created'
        });
    } catch (err) {
        return res.status(400).send({
            error: err,
            message: 'Note creation failed'
        });
    }
});

router.get('/', async (req, res) => {
    try {
        const user = await User.findById(req.userId).populate('notes');
        return res.send(user.notes);
    } catch (err) {
        return res.status(400).send({
            error: err,
            message: 'Notes retrieving failed'
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const note = await Note.findById(req.userId);
        return res.send(note);
    } catch (err) {
        return res.status(400).send({
            error: err,
            message: 'Note retrieving failed'
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        await Note.findOneAndUpdate({
            id: req.params.id,
            title: req.body.title,
            content: req.body.content,
        });
        return res.send({
            message: 'Note successfully updated'
        });

    } catch (err) {
        return res.status(400).send({
            error: err,
            message: 'Note update failed'
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const noteDeleted = await Note.findOneAndRemove({
            id: req.params.id
        });
        await User.findByIdAndUpdate(req.userId, {
            $pull: {
                notes: {
                    $in: noteDeleted._id
                }
            }
        });
        return res.send({
            message: 'Note successfully deleted'
        });
    } catch (err) {
        return res.status(400).send({
            error: err,
            message: 'Note deletion failed'
        });
    }
});

module.exports = app => app.use('/auth/notes', router);