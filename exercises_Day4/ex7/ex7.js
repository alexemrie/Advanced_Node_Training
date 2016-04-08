function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(file) {
	return ASQ(function(done){
		fakeAjax(file,done);
	});
}

ASQ()
.runner(function *main(){
	var prom1 = getFile("file1");
	var prom2 = getFile("file2");
	var prom3 = getFile("file3");

	output(yield prom1);
	output(yield prom2);
	output(yield prom3);

	output("Complete!");
});
