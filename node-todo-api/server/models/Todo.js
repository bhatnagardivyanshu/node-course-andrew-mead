const {mongoose} = require('../db/mongoose')

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 4,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

module.exports = {Todo}
