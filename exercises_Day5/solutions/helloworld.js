function printFile(filename,cb) {
	fs.readFile(filename,function(err,msg){
		if (err) {
			cb(err);
		}
		else {
			setTimeout(function(){
				cb(null,msg.toString());
			},1000);
		}
	});
}

var fs = require("fs");

module.exports.printFile = printFile;
