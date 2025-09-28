const http = require('node:http')

const server = http.createServer(function(req, res){
    const method = req.method;
    const path = req.url;


switch(path) {
    case '/':
        res.writeHead(200).end('hello shivendra ji')
}



});

server.listen(8000, () => console.log(`Http server is running on PORT 8000`))
