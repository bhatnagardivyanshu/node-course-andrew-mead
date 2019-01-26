const expect = require('expect')
const request = require('supertest')

const {ObjectId} = require('mongodb')
const { app } = require('../index')
const { Todo } = require('../models')

let recordsCount = null

// testing lifecycle method
// beforeEach(done => {
//     Todo.find()
//         .countDocuments()
//         .then(count => {
//             recordsCount = count
//             // done()
//         })
//     done()
// })

// describe("Post /todos", async () => {
//     it("should create a new todo", done => {
//         const text = "10+ LPA package by end of 2019"
//         request(app)
//             .post("/todos")
//             .send({ text })
//             .expect(200)
//             .expect(res => {
//                 expect(res.body.text).toBe(text)
//             })
//             .end(async (err, res) => {
//                 if (err) {
//                     return done(err)
//                 }
//                 try {
//                     const todos = await Todo.find()
//                     // console.log('Todos length  =====> ' + todos.length)
//                     expect(todos.length).toBe(recordsCount + 1)
//                     // console.log('Todos  =====> ', todos)
//                     // expect([1,2,3,4]).toInclude(3)
//                     // expect(todos).toInclude({ text })
//                     // expect(todos[0].text).toBe(text)
//                     done()
//                 } catch (err) {
//                     done(err)
//                 }
//             })
//     })

//     it("should not create a todo with invalid data", done => {
//         request(app)
//             .post("/todos")
//             .send({})
//             .expect(400)
//             .end(async (err, res) => {
//                 if (err) {
//                     return done(err)
//                 }
//                 try {
//                     const todos = await Todo.find()
//                     expect(todos.length).toBe(recordsCount)
//                     done()
//                 } catch (err) {
//                     done(err)
//                 }
//             })
//     })
// })

// describe('GET /todos', () => {
//     it('should return all the todos', (done) => {
//         request(app)
//         .get('/todos')
//         .expect(200)
//         .expect((res) => {
//             expect(res.body.length).toBe(recordsCount)
//         })
//         .end(done)
//     })
// })

// Testing GET route

// const todos = [{
//   _id: new ObjectId(),
//   text: 'Testing the get resource route'
// }, {
//   _id: new ObjectId(),
//   text: 'Lorem Ipsum'
// }]

// beforeEach((done) => {
//   Todo.deleteMany({})
// 	  .then(() => Todo.insertMany(todos))
// 	  .then(() => done())
// })

// describe('GET /todos/:id', () => {
//   it('should return a todo object get by id', (done) => {
//     let todo = todos[0]
//     request(app)
//       .get(`/todos/${todo._id.toHexString()}`)
//       .expect(200)
//       .expect((res) => {
//         expect(res.body.text).toBe(todo.text)
//       })
//       .end(done)
//   })

//   it('should return 404 if invalid id given', (done) => {
//     request(app)
// 	  .get('/todos/123abck')
//       .expect(404)
//       .end(done)
//   })

//   it('should return 404 if no record is found', (done) => {
//     const tempId = new ObjectId().toHexString()
//     request(app)
//       .get(`/todos/${tempId}`)
//       .expect(404)
//       .end(done)
//   })
// })

// Testing DELETE route

// beforeEach((done) => {
//   Todo.deleteMany({})
// 	  .then(() => Todo.insertMany(todos))
// 	  .then(() => done())
// })


// const todos = [{
//   _id: new ObjectId(),
//   text: 'Testing the get resource route'
// }, {
//   _id: new ObjectId(),
//   text: 'Lorem Ipsum'
// }]

// describe('DELETE /todos/:id', () => {

//     it('should remove a todo', (done) => {
//         const hexId = todos[1]._id.toHexString();
//         request(app)
//             .delete(`/todos/${hexId}`)
//             .expect(200)
//             .expect((res) => {
//                 expect(res.body._id).toBe(hexId)
//             })
//             .end((err, res) => {
//                 if(err) {
//                     return done(err);
//                 }
//                 Todo.findById(hexId).then((res) => {
//                     expect(res).toNotExist()
//                     done();
//                 }).catch((err) => done(err))
//             })
//     })

//     it('should return 404 if no record is found', (done) => {
//         const hexId = new ObjectId().toHexString();
//         request(app)
//             .delete(`/todos/${hexId}`)
//             .expect(404)
//             .end(done)
//     })

//     it('should return if object id is invalid', (done) => {
//         request(app)
//             .delete(`/todos/123123`)
//             .expect(404)
//             .end(done)
//     })
// })


// beforeEach((done) => {
//     Todo.deleteMany({})
//         .then(() => Todo.insertMany(todos))
//         .then(() => done())
//   })
  
  
//   const todos = [{
//     _id: new ObjectId(),
//     text: 'Testing the get resource route'
//   }, {
//     _id: new ObjectId(),
//     text: 'Lorem Ipsum'
//   }]
  
// describe('UPDATE /todos/:id', () => {

//     it('should update a todo', (done) => {
//         const hexId = todos[1]._id.toHexString();
//         const text = 'It worked';
//         request(app)
//             .patch(`/todos/${hexId}`)
//             .send({text, is_completed: true})
//             .expect(200)
//             .expect((res) => {
//                 expect(res.body.text).toBe(text);
//                 expect(res.body.completed).toBe(true)
//                 expect(res.body.completedAt).toBeA('number')
//             })
//             .end(done)
//     })

//     it('should clear completedAt if todo is not completed', (done) => {
//         const hexId = todos[1].id.toHexString();
//         request(app)
//             .patch(`/todos/${hexId}`)
//             .send({text, is_completed: false})
//             .expect(200)
//             .expect((res) => {
//                 expect(res.body.text).toBe(text);
//                 expect(res.body.completed).toBe(false)
//                 expect(res.body.completedAt).toNotExist('number')
//             })
//             .end(done)
//     })

    
// })