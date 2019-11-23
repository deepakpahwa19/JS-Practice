/*
var obj = {};
obj.a =10;

function foo(){
    console.log(this.a);
}

var x = foo.bind(obj);
x();
*/

/*
function foo() {
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
}

var baz = obj.foo;
var x = baz.bind({ a: 10 });
x();
baz();
*/