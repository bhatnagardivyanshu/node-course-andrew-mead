const db = require("./db");

module.exports.handleSignup = (email, password) => {
    // Check if email alread exists
    db.saveUser({ email, password });
    // Save user
    // Welcome email
};
