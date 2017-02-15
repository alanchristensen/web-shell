// based of https://github.com/awslabs/aws-serverless-express/tree/master/example

const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app')
const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)

/*
exports.handler = function(event, context, callback) {
    callback(null, {
      "statusCode": 200,
      "body": "it worked"
    });
};

/*

server.listen(8080)


app.get('', function(req, res) { res.sendFile(`${__dirname}/index.html`) } )

io.on('connection', function(socket) {
  const bash = cp.spawn('/bin/bash')
  bash.stdout.setEncoding('utf8')
  bash.stdout.on('data', function(data) { socket.emit('out', data) } )
  socket.on('bash', function(command) { bash.stdin.write(command) } )
})

exports.handler = function(event, context, callback) {
    callback(null, {
      "statusCode": 200,
      "body": fs.readFileSync(__dirname + '/index.html').toString()
    });
};
*/