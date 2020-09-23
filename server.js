const express = require('express')
const app = express()
const mongoose = require('mongoose')
const car = require('./routes/car')

app.use(express.json())

mongoose
  .connect('mongodb://localhost/ganiscar', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to mongoDB...'))
  .catch((err) => console.log(err))

app.use('/ganiscar/api/car', car)

const port = process.env.PORT || 9000
app.listen(port, () => console.log(`connected to port ${port}`))
