const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Error occured while connecting to MongoDB Server')
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp');

  db.collection('Todos').insertOne({
      text: 'Start building the Todo App',
      completed: true
  }, (err, result) => {
    if(err) return console.log('Failed to insert the record in the db');
    console.log(JSON.stringify(result.ops, result.ops[0]._id.getTimestamp(), undefined, 2));
  });
  
  client.close();
})
