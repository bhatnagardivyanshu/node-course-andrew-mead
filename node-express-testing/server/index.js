const app = require('express')()
const port = 3000

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Not found',
    name: 'Divyanshu'
  })
})

app.listen(port)
// , () => console.log(`Listening to port ${port}`))

// module.exports = { ...module.exports, app }
module.exports.app = app
