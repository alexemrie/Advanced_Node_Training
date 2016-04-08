process.on("uncaughtEception", function(){
  console.log("nice handling of: " + err);
});


var minimist = require('minimist'); //minimist is actually a function

var args = minimist(process.argv.slice(2), {
  string: ["file"]
});    //returns object with all of arguments parsed out
       // want file to always be a string

if (!args.file || args.help){     //if left off file parameter or passed help print help
  printHelp();

  process.exit(1);                 //process exit 0 means nothing went wrong
}                                 //process exit 1 means error

var fs = require("fs");           //file system comes shipped with Node

// var contents = fs.readFileSync(args.file).toString();
  //args.file == file name
  //gives back contents of file as return value
  //all streams are binary stream buffers which is why we call toString()
    //<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 0a>
  //toString() adds new line character so do process.stdout.write

// process.stdout.write(contents)  //Hello World

// fs.readFile(args.file, function(err, contents){
//   if (err) {
//     console.error( err.toString() );
//   }
//   else {
//     process.stdout.write(contents.toString());
//   }
// });


// ************************************

var hello = require("./hello_world.js");

hello.readit(args.file, function(err, contents){
  if (err){
    console.error(err);
  }
  else {
    process.stdout.write(contents)
  }
});



// ************************************

function printHelp(){
  console.log("1.js (c) AEmrie");
  console.log(":usage");
  console.log(" node 1.js --file=FILENAME");
  console.log("");
  console.log("--help       print help")
  console.log("");
}
