const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 3200;
const api = require('./routes/api')
const app = express();

app.use(bodyParser.json())
app.use(cors())

app.use('/api', api)
app.get('/', (req, res) => {
  res.send("hello worlds")
})

app.listen(PORT, () => {
  console.log('server run on 3200')
})