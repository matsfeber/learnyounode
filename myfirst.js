var fs = require('fs');
var filePath = process.argv[2];

var buffer = fs.readFileSync(filePath);
var string = buffer.toString();
var array = string.split('\n');
var length = array.length-1;
console.log(length);
