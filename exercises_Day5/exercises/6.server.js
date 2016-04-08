//Node Static

function handleHTTP(req,res) {
	if (req.method == "GET"){
    if (/^\/\d+(?=$|[\/?#])/.test(req.url)){
      req.url = req.url + ".html";
      static_files.serve(req, res);
    }
    else {
  		res.writeHead(403);
  		res.end();
  	}
	}
	else {
		res.writeHead(403);
		res.end();
	}
}

// ************************************


var
	http = require("http"),
	httpserv = http.createServer(handleHTTP),

	port = 8006,
	host = "127.0.0.1",
  ASQ = require("asynquence");
  node_static = require("node-static");
  static_files = new node_static.Server(__dirname)         //argument is directory want to serve static files out of; double underscore dirname is current directory
;

require("asynquence-contrib");

httpserv.listen(port, host);
