const http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end("안녕")
}).listen(5050)