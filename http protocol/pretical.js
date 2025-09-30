const http = require("node:http");

const server = http.createServer(function (req, res) {
  const method = req.method;
  const path = req.url;

  if (method === "GET") {
    if (path === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end("hello shivendra ji");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("404 Not Found");
    }
  } else if (method === "POST") {
    if (path === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      return res.end("POST request received at /");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("404 Not Found for POST");
    }
  } else {
    // Method not allowed
    res.writeHead(405, { "Content-Type": "text/plain" });
    return res.end(`Method ${method} not allowed`);
  }
});

server.listen(8000, () =>
  console.log(`HTTP server is running on PORT 8000`)
);
