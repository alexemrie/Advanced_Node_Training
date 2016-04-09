//Sockets

/*Way to upgrade from http protocol
whenever traffic comes in that looks like web socket traffic handle as web socket
otherwise handle as normal http protocol*/


function defineRoutes(){
  app.get("/", function(req, res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hey, you are an awesome developer!");
    res.end();
  });

  app.use(function(req, res, next){
    if (/^\/\d+/.test(req.url)) {
      req.url = req.url + ".html";
    }
    next();
  });

  app.use(express.static(__dirname));

}

var
  express = require("express"),
  app = express(),

	http = require("http"),
	httpserv = http.createServer(app),

  socket_io = require("socket.io"),                             //websockets are upgrade on http protocol
  io = socket_io(httpserv),

	port = 8006,
	host = "127.0.0.1"
;

httpserv.listen(port, host);
defineRoutes();
