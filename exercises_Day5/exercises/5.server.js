//task set calls for 1000'ms

function waitASecond(){
  return ASQ.after(1000);
}

function getNumber(){
  return waitASecond().val(Math.random());
}

function getMessage(num){
  return waitASecond().val("Hello: " + num);
}

function handleHTTP(req,res) {
	if (req.method == "GET"){
		if (req.url == "/"){

			res.writeHead(200, {
				"Content-Type": "text/plain"
			});


      // ASQ()
      // .runner(function(){
      //   var num = yield getNumber();
      //   var msg = yield getMessage(num);
      //
      //   res.write(msg);
      //   res.end();
      // });

      getNumber()
      .seq( getMessage )
      .val(function(msg){
        res.write(msg);
        res.end();
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

// ************************************

//without using asynquence

// function handleHTTP(req,res) {
// 	if (req.method == "GET"){
// 		if (req.url == "/"){
//
// 			res.writeHead(200, {
// 				"Content-Type": "text/plain"
// 			});
//
//       setTimeout(function(){
//         var num = Math.random();
//         setTimeout(function(){
//     			res.write("Hello:" + Math.random());
//     			res.end();
//         },1000);
//       }, 1000);
//
// 		}
// 		else {
// 			res.writeHead(403);
// 			res.end();
// 		}
// 	}
// 	else {
// 		res.writeHead(403);
// 		res.end();
// 	}
// }


var
	http = require("http"),
	httpserv = http.createServer(handleHTTP),

	port = 8006,
	host = "127.0.0.1",
  ASQ = require("asynquence");
;

require("asynquence-contrib");

httpserv.listen(port, host);
