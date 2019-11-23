var fs = require('fs');

var greet = fs.readFileSync(__dirname+'/greet.txt');

console.log(greet);