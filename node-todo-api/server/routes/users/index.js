const express = require('express')
const Router = express.Router();

const {authenticate} = require('../../middlewares/authenticate');
const {User} = require('../../models/User')

const _ = require('lodash')

Router.get('/me', authenticate, (req, res) => {
    res.send(req.user);
})

Router.post('/', (req, res) => {
    const body = _.pick(req.body, ['email', 'password']);
    const user = new User(body);
    user.save()
        .then(() => user.generateAuthToken())
        .then((token) => {
            res.header('x-auth', token).send(user.toJSON());
        })
        .catch((e) => res.status(400).send(e))
})

module.exports = Router;