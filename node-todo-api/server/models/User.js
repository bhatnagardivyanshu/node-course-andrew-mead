const { mongoose } = require("../db/mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcryptjs");

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        minLength: 4,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "{VALUE} is not a valid email address"
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    tokens: [
        {
            access: {
                type: String,
                required: true
            },
            token: {
                type: String,
                required: true
            }
        }
    ]
});

UserSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();
    return _.pick(userObject, ["email", "_id"]);
};

// Model.methods is an instance method
UserSchema.methods.generateAuthToken = function() {
    const user = this; // represents the document/the object of class User
    const access = "auth";
    const token = jwt
        .sign({ _id: user._id.toHexString(), access }, "123")
        .toString();

    user.tokens = user.tokens.concat([{ access, token }]);
    return user.save().then(() => token);
};

// Model.statics is a model method
UserSchema.statics.findByToken = function(token) {
    const User = this; // this belongs to the Model
    let decoded = null;

    try {
        decoded = jwt.verify(token, "123");
    } catch (error) {
        return Promise.reject("some info");
    }
    return User.findOne({
        _id: decoded._id,
        "tokens.token": token,
        "tokens.access": "auth"
    });
};

UserSchema.pre("save", async function(next) {
    const user = this;

    if (user.isModified("password")) {
        
        const password = user.password;
        await bcrypt.genSalt(10, (err, salt) => {
            
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) { console.log("Error =>", err); }

                user.password = hashedPassword;
                next();
            });
        });
    } else {
        next();
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = { User };
