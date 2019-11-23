var Singleton = (function () {

    function SingleObject(options) {
        this.name = options.name || 'Akshay Kumar';
        this.desingation = options.desingation || 'Senior Actor';
        this.address = options.city || 'Mumbai';
    }

    var instatiated;
    return {
        getInstance: function (options) {
            if (!instatiated) {
                instatiated = new SingleObject(options);
            }

            return instatiated;
        }
    }
}());

console.log(Singleton.getInstance({
    name: 'Deepak',
    desingation: 'SSE',
    city: 'Rishikesh'
}).name);
console.log(Singleton.getInstance().desingation);
console.log(Singleton.getInstance().address);

console.log(Singleton.getInstance({
    name: 'Indu',
    desingation: 'HR',
    city: 'Dehradun'
}).name);
console.log(Singleton.getInstance().desingation);
console.log(Singleton.getInstance().address);