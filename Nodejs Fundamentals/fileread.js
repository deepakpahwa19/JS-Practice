// var t = performance.now();
// var fs = require('fs');
// var greet = fs.readFileSync(__dirname+'/greet.txt', 'utf8');
// console.log(greet);


const arr = ['12', '34', '56'];
const numbers = arr.map(Number);
const x = console.log(numbers.reduce((sum, num) => sum + num));