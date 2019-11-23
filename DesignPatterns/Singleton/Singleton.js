var Singleton = (function () {

    function init() {
        return {
            a: 3,
            b: 4
        }
    }

    var instantiated;

    return {
        getInstance: function () {
            if (!instantiated) {
                instantiated = init();
            }

            return instantiated;
        }
    }
}());

console.log(Singleton.getInstance().a);
console.log(Singleton.getInstance().b);