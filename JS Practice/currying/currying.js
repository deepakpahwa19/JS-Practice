function foo(x) {
    return function boo(y) {
        return function baz(z) {
            return x + y + z;
        }
    }
}

var c = foo(4);
console.log(c(5)(2));