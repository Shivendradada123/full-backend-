const http = require('http')

const server = http.createServer(function (req, res) {
    console.log('Ha reques a rahi hai bhejo  ')
    res.writeHead(200)
    res.end('yes shivendra chal gya server aja')
});




server.listen(8000, function () {
    console.log(`http runnig on port 8000`)
});









