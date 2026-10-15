var http = require("http");
var fs = require("fs");

/*http.createServer(server).listen(7000)

function server(req, res) {
    res.write('Crossroads')
    res.end()
}*/

http
  .createServer(function (req, res) {
    fs.readFile("samplehtml.html", function (err, data) {
      res.writeHead(200, { "Content-type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(7000);
