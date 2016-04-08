function printFile(filename) {
	var rfile = ASQ.wrap( fs.readFile );

	return rfile(filename)
		.then(function(done,msg){
			setTimeout(function(){
				done(msg.toString());
			},1000);
		});
}

var fs = require("fs");

var ASQ = require("asynquence");
require("asynquence-contrib");

module.exports.printFile = printFile;
