const express = require('express')
const app = express()

app.use(express.json())

const port = process.env.PORT || 9000
app.listen(port, () => console.log(`connected to port ${port}`))
