const express = require('express')
const app = express()
const port = process.env.POST || 8080

app.listen(port)