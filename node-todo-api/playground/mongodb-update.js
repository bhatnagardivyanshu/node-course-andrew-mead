const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
    "mongodb://localhost:27017/TodoApp",
    async (err, client) => {
        if (err) {
            return console.log(
                "Error occured while connecting to MongoDB Server"
            );
        }
        console.log("Connected to MongoDB Server");

        const db = client.db("TodoApp");

        const documents = await db.collection("Todos").findOneAndUpdate(
            { _id: new ObjectID("5bf808f766f3ef688dfb1b24") },
            {
                $set: {
                    completed: false
                }
            }, {
                returnOriginal: false // returns the updated document
            }
        ); // delete many documents
        //   const documents = await db.collection('Todos').deleteOne({_id: ObjectID("5bf8071cb3911e5a9cd21f55")}); // delete single documents
        //   const documents = await db.collection('Todos').findOneAndDelete({_id: ObjectID("5bf8071ef8a7fc5a9d74e2a0")}); // get the document details and delete it; useful when showing deleted user with email xyz@abc.com
        console.log(
            "Documents deleted:",
            JSON.stringify(documents, undefined, 4)
        );

        client.close();
    }
);
