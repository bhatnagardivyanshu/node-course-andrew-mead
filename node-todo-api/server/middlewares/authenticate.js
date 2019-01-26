const {User} = require('../models');

const authenticate = (req, res, next) => {
    const token = req.header('x-auth');
    User.findByToken(token)
        .then((user) => {
            if(!user) {
                console.log('user not found');
                res.status(401).send();
            }
            req.user = user; // so that we can use get user via req obj anywhere
            req.token = token;
            next()
        })
        .catch((e) => res.status(401).send())
}

module.exports = {authenticate};