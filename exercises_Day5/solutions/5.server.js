function getRandomAsync(cb) {
	setTimeout(function(){
		cb( Math.random() );
	},1000);
}

function messageAsync(val,cb) {
	setTimeout(function(){
		cb( "Hello World: " + val );
	},2000);
}

function handleHTTP(req,res) {
	if (req.method == "GET") {
		if (req.url == "/") {
			res.writeHead(200,{ "Content-type": "text/plain" });

			ASQ(function(done){
				getRandomAsync(done);
			})
			.then(function(done,msg){
				messageAsync(msg,done);
			})
			.val(function(msg){
				res.end(msg);
			});
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


var
	http = require("http"),
	httpserv = http.createServer(handleHTTP),

	port = 8006,
	host = "127.0.0.1",

	ASQ = require("asynquence")
;

require("asynquence-contrib");

httpserv.listen(port, host);
