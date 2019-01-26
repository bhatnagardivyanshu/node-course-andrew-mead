// packages
const express = require('express')
const bodyParser = require('body-parser')

// modules
const {port} = require('./config')
const Routes = require("./routes")

const app = express()

app.use(bodyParser.json())

app.use('/login', Routes.AuthRoutes);
app.use('/todos', Routes.TodoRoutes);
app.use('/users', Routes.UserRoutes);

app.listen(port, () => console.log(`Listening to port ${port}`))

module.exports = {app}