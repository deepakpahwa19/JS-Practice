function Emitter(){
    this.events = {};
}


Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
    this.events[type].forEach(function(item){
        item();
    })
}

module.exports = Emitter;