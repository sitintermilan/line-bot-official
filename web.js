const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) =>
    res.send('hello !!')
)
app.post('/webhook', (req, res) => res.sendStatus(200))

app.listen(port)