var fs = require("fs");
var ASQ = require("asynquence");
require("asynquence-contrib");

module.exports.readit = readit;
//*******************

function readit(filename){
  var readfile = ASQ.wrap(fs.readFile);
  return readfile(filename);
}
