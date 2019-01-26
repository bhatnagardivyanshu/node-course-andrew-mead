const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/TodoApp', async (err, client) => {
  if (err) {
    return console.log('Error occured while connecting to MongoDB Server')
  }
  console.log('Connected to MongoDB Server');

  const db = client.db('TodoApp');

//   const documents = await db.collection('Todos').find().toArray(); // find all the documents
//   const documents = await db.collection('Todos').find({completed: true}).toArray(); // find all the documents
  const documents = await db.collection('Todos').find({completed: true}).count(); // get count
  console.log('Number of Documents:', JSON.stringify(documents, undefined, 4));
  
  client.close();
})
