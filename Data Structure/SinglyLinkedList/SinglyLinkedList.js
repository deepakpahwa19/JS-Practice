const { Node } = require('./Node');
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(node) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
    }

    pop() {
        if (!this.head) return undefined;
        let newTail;

        let current = this.head;
        while (current.next && current.next !== this.tail) {
            current = current.next;
        }
        newTail = this.tail;
        this.tail = current;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return newTail;
    }

    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0)
            this.tail = null;
        return current;
    }

    unshift(newNode) {
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    print() {
        for (let node = this.head; node !== null; node = node.next) {
            console.log(node.value);
        }
    }

}

const list = new SinglyLinkedList();
const firstNode = new Node('Hello There');
// list.push(new Node(1));
// list.push(new Node(28));
// list.push(new Node(39));
// list.push(new Node(22));
// list.push(new Node(11));
// list.print();
console.log('======================');
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// list.print();
console.log('======================');
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
console.log(list.shift());
// console.log(list.shift());
// list.print();
console.log('======================');
list.unshift(new Node(12));
list.unshift(new Node(99));
console.log(list.shift());
list.unshift(new Node(23));
list.print();

console.log('======================');

