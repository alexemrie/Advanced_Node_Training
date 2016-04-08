var fs = require("fs");
var ASQ = require("asynquence");
require("asynquence-contrib");

module.exports.readit = readit;
//*******************

function readit(filename){
  var readfile = ASQ.wrap(fs.readFile);
  return readfile(filename);
}




//*******************

// function readit(filename){
//   var sq = ASQ();
//
//   sq.then(function(done){
//
//     fs.readFile(filename, function(err, contents){
//       if (err) {
//         done.fail( err.toString() );
//       }
//       else {
//         done( contents.toString() );
//       }
//     });
//
//   });
//
//   return sq;
// }
