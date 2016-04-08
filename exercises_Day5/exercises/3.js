process.on("uncaughtEception", function(){
  console.log("nice handling of: " + err);
});

var minimist = require('minimist');
var fs = require("fs");

var ASQ = require("asynquence");
require("asynquence-contrib");

var args = minimist(process.argv.slice(2), {
  string: ["file"]
});

if (!args.file || args.help){
  printHelp();
  process.exit(1);
}

var hello = require("./hello_world3.js");         //modified

hello.readit(args.file)                     //exposes itself as a sequence
.val(function(contents){
  process.stdout.write(contents);
})
.or(function(err){                          //asynquence error handling using or
  console.log(err);
});


// *************************

function printHelp(){
  console.log("1.js (c) AEmrie");
  console.log(":usage");
  console.log(" node 2.js --file=FILENAME");
  console.log("");
  console.log("--help       print help")
  console.log("");
}
