const {ObjectId} = require("mongodb");
const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models");

const id = '5bf84790b19d723525ed9323';

Todo.find({_id: id}).then(data => {
    if(ObjectId.isValid(id)) {
        console.log('INVALID ID ', id);
    }
}).catch(e => console.error('Error: ', e))

Todo.findOne({_id: id}).then(data => {
    console.log("Todo using findOne", data);
}).catch(e => console.error('Error: ', e))

Todo.findById(id).then(data => {
    console.log("Todo using findById", data);
}).catch(e => console.error('Error: ', e))

