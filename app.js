let http = require('http');

let hostname = '127.0.0.1'
let port = process.env.PORT || 5000

let server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'application/json');
    res.end('{"name" : "gabriella amaefule", "language" : "node.js"}')
})

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${5000}/`)
})