const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

mongoose
  .connect('mongodb://localhost/ganiexp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to mongoDB...'))
  .catch((err) => console.log(err))

const port = process.env.PORT || 9000
app.listen(port, () => console.log(`connected to port ${port}`))
