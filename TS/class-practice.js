var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log(this.name + " moved");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, _fullName, breed) {
        var _this = _super.call(this, name) || this;
        _this._fullName = _fullName;
        _this.breed = breed;
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.bark = function () {
        console.log(this.name + ", breed: " + this.breed + " is barking");
    };
    Object.defineProperty(Dog.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (fname) {
            this._fullName = fname;
        },
        enumerable: true,
        configurable: true
    });
    return Dog;
}(Animal));
var dog = new Dog('Tommy the dog', 'Rahul Gandhi', 'PUG');
console.log(dog.fullName);
dog.fullName = 'BKL';
console.log(dog.fullName);
