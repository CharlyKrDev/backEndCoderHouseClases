const express = require('express')
const app = express()

const PORT = 8080

app.get('/miaplicacion', (req, res) => {
  res.send('hola mundo')
})

app.listen(8080, () => {
  console.log(`Server is running  on port ${PORT}`)
})