//Express


function defineRoutes(){
  app.get("/", function(req, res){                              //express is just an api for an if statement with a function call
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hey, you are an awesome developer!");
    res.end();
  });

  app.use(function(req, res, next){
    if (/^\/\d+/.test(req.url)) {                   // url rewrite if doesn't include .html extension
      req.url = req.url + ".html";                              // http://localhost:8006/7 returns 7.html file
    }
    next();
  });

  app.use(express.static(__dirname));                          //use is generic middleware form (function)
                                                               //serves static file if go to localhost:8080/test.txt
}

var
  express = require("express"),
  app = express(),

	http = require("http"),
	httpserv = http.createServer(app),

	port = 8006,
	host = "127.0.0.1"
;

httpserv.listen(port, host);
defineRoutes();
