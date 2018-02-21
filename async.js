var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath,function callback (err, data){
if(err){return err};

  var string = data.toString();
  var array = string.split('\n');
  var length = array.length-1;
  console.log(length);
}
)
