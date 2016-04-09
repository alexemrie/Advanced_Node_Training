//Sockets

/*network in browser
101
frames is actual socket message format*/

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

  socket_io = require("socket.io"),
  io = socket_io(httpserv),

	port = 8006,
	host = "127.0.0.1"
;

httpserv.listen(port, host);
defineRoutes();

io.on("connection", handleSocketConnection);

function handleSocketConnection(socket){
  console.log("yay, the client connected!");
  socket.on("disconnect", function(){
    console.log("hey the client disconnected:-(");
    clearInterval(intv);
  });                                                      //listener for if socket disconnects

  var intv = setInterval(function(){
    socket.emit("hello", Math.random());
  }, 1000);
};
