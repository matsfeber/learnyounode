var fs = require('fs'); // haalt fs op van npm
var path = require('path');// haalt path op van npm

var ext = process.argv[3];
var directory = process.argv[2];//maakt een variabele aan met de directory

fs.readdir(directory,function callback (err, list) {
if (err) {return err}; // error melding, weet nog niet precies wat dit doet

var length = list.length;// haalt de filenames uit de array

for(var i = 0; i < length; i++){
    var x =list[i]; //haalt de filenames uit de array
    var e = path.extname(x);// leest uit wat de file is voor bestand

    if (e == "."+ext){// als de het bestand dus een .ext is dan wordt dit uitgevoerd
      console.log(x) // logt alle bestanden met .ext
    }
}
})
