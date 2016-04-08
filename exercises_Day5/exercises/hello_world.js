var fs = require("fs");
module.exports.readit = readit;

//*******************

function readit(filename, cb){

  fs.readFile(filename, function(err, contents){
    if (err) {
      cb( err.toString() );
    }
    else {
      cb( null, contents.toString() ); //null for the error, contents that received
    }                                  //error first style in node
  });

}
