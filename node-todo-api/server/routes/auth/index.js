const express = require('express');
const Router = express.Router();
const bcrypt = require('bcryptjs');

const {User} = require('../../models');

Router.post('/', (req, res) => {

    const {email, password} = req.body;
    
    console.log(req.body);
    
    User.findOne({email}).then((user) => {

        if (!user) return res.status(400).send('Email doesn\'t exist');
        
        const isValidPassword = bcrypt.compare(password, user.password).then((isValidPassword) => {
            if (! isValidPassword) return res.status(400).send('Invalid username/password');
            console.log('isValid', isValidPassword, user);
            res.setHeader('x-auth', user.tokens.token).send(user)
        });
        
    }).catch((err) => res.status(400).send(err));
    
});

module.exports = Router