const http = require("node:http");

// Create the server
const server = http.createServer(function (req, res) {
  console.log(req, res);
  // Check which URL the user is requesting
  if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Aap contact page par ho.");
  } else if (req.url === "/lalu") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("Hello Mauhariya!");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("yayaaya");
  }
});

// Server ko 8000 port par run karo
server.listen(8000, () => {
  console.log("Server is running at http://localhost:8000");
});


