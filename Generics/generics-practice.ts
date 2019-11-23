class Person<T> {
    constructor(private _name: T, private _designation: T) { }

    get name():T {
        return this._name;
    }

    set name(name: T){
        this._name = name;
    }

    get designation():T {
        return this._designation
    }
}

let dpk = new Person<string>('Deepak', 'SSE');
let kranti = new Person('Kranti', "SQE");

console.log(dpk.name);
dpk.name = 'Deepak Pahwa';
console.log(dpk.name);
console.log(dpk.designation);

