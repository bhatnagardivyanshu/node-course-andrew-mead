const _ = require("lodash");
const express = require("express");
const Router = express.Router();
const { Todo } = require("../../models");
const { ObjectId } = require("mongodb");

Router.use((req, res, next) => {
    console.log(` ${new Date().toLocaleString()}: ${req.method} ${req.url}`);
    next();
});

Router.get("/", async (req, res) => {
    // (Todo.find().then((data) => res.send(data)))
    const todos = await Todo.find();
    res.send(todos);
});

Router.get("/:id", async (req, res) => {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then(todo => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send(todo);
    });
});

Router.post("/", (req, res) => {
    // res.send(req.body)
    const data = req.body;
    const todo = new Todo(data)
        .save()
        .then(doc => res.send(doc), err => res.status(400).send(err.message));
});

Router.delete("/:id", (req, res) => {
    const { id } = req.params;

    // is valid id
    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    }

    // is todo deleted
    Todo.findByIdAndRemove(id)
        .then(todo => {
            if (!todo) {
                res.status(404).send();
            } else {
                res.send(todo);
            }
        })
        .catch(e => res.status(400).send(e));
});

Router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const body = _.pick(req.body, ["text", "completed"]);

    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.is_completed) && body.is_completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.is_completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then(todo => {
            if (!todo) {
                res.status(400).send('Todo not found');
            }
            res.send(todo)
        })
        .catch(e => res.status(400).send(e));
});

module.exports = Router;
