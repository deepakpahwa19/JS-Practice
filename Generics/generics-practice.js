var Person = /** @class */ (function () {
    function Person(_name, _designation) {
        this._name = _name;
        this._designation = _designation;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "designation", {
        get: function () {
            return this._designation;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var dpk = new Person('Deepak', 'SSE');
var kranti = new Person('Kranti', "SQE");
console.log(dpk.name);
dpk.name = 'Deepak Pahwa';
console.log(dpk.name);
console.log(dpk.designation);
