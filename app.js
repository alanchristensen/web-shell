const express = require('express')
const cors = require('cors')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const app = express()

app.use(awsServerlessExpressMiddleware.eventContext())

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

module.exports = app

/*
const fs = require('fs')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const cp = require('child_process')

app.get('', function(req, res) { res.sendFile(`${__dirname}/index.html`) } )

module.exports = app
*/