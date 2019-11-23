var Emitter = require("./emitter");


var emitter = new Emitter();

emitter.on('greet', function(){
    console.log('Somewhere, someday said hello!');
})

emitter.on('greet', function(){
    console.log('Hello World');
})

emitter.on('love', function(){
    console.log('I love my love!');
})

emitter.emit('greet');
// emitter.emit('love');