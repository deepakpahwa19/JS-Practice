class Animal {
    constructor(protected name: string) {
    }
    move() {
        console.log(`${this.name} moved`);
    }
}

class Dog extends Animal {
    constructor(name: string, private _fullName: any, public breed?: string) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(`${this.name}, breed: ${this.breed} is barking`);
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(fname: string) {
        this._fullName = fname;
    }
}


const dog = new Dog('Tommy the dog', 'Rahul Gandhi', 'PUG');
console.log(dog.fullName);

dog.fullName = 'BKL'
console.log(dog.fullName);