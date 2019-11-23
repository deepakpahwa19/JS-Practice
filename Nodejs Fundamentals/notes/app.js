var notes = require('./notes');
var yargs = require('yargs');
var argv = yargs.argv;

console.log('Yargs: ', argv._);

notes.addNote(argv.title, argv.body);