const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        if (await User.findOne({
                email: req.body.email
            }))
            return res.status(400).send({
                error: 'User already registered'
            });

        const user = await User.create(req.body);

        user.password = undefined;

        const token = generateToken({
            id: user.id
        });
        
        res.send({
            user,
            token,
        });
    } catch (err) {
        return res.status(400).send({
            error: err,
            message: 'Registration Failed'
        });
    }
});

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

router.post('/authenticate', async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const user = await User.findOne({
        email
    }).select('+password');

    if (!user) {
        return res.status(400).send({
            error: 'User not found'
        });
    }

    if (!await bcrypt.compare(password, user.password)) {
        return res.status(400).send({
            error: 'Invalid password'
        });
    }

    user.password = undefined;

    const token = generateToken({
        id: user.id
    });

    res.send({
        user,
        token,
    });
})

module.exports = app => app.use('/auth', router);