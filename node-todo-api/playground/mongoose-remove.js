const {ObjectId} = require("mongodb");
const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models");

Todo.deleteMany({}).then((result) => console.log(result));

// const id = new ObjectId('some-id')
// Todo.findByIdAndDelete(id)
// Todo.findOneAndDelete(id)