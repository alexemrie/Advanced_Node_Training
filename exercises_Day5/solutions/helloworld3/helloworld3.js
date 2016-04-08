function printFile(filename) {
	return ASQ(function(done){
		var stream = fs.createReadStream(filename);
		var data = "";

		stream.pipe(fs.createWriteStream(filename+".backup"));

		stream.on("data",function(chunk){
			data += chunk;
		});
		stream.on("end",function(){
			done(data);
		});
	})
	.then(function(done,msg){
		setTimeout(function(){
			done(msg);
		},1000);
	});
}

var fs = require("fs");

var ASQ = require("asynquence");
require("asynquence-contrib");

module.exports.printFile = printFile;
