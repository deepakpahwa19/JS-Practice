var foo = new Object();
var bar = new Object();
var map = new Object();

map[foo] = 'foo';
map[bar] = 'bar';
map.toString = function(){
    return 'Deepak Pahawa';
}
console.log(map.toString());

console.log(map[foo]);