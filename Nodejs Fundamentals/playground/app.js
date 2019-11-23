const fs = require('fs');

var person = {
    name: 'Deepak',
    designation: 'SSE',
    age: 32
}

var personString = JSON.stringify(person);
console.log(typeof personString);
fs.writeFileSync('./notes.json', personString);

var person2 = JSON.parse(fs.readFileSync('./notes.json'));
console.log(person2);
console.log(typeof person2);