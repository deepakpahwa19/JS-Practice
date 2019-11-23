const { Node } = require('../Node');

class BinarySearchTree {
    constructor(node) {
        this.root = node;
    }

    insert(nextNode) {
        let currentNode = this.root
        while (true) {
            if (nextNode.value > currentNode.value) {
                if (currentNode.right === null) {
                    currentNode.right = nextNode;
                    break;
                }
                currentNode = currentNode.right;
            } else if (nextNode.value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = nextNode;
                    break;
                }
                currentNode = currentNode.left;
            } else {
                break;
            }
        }
    }

    find(value) {
        let currentNode = this.root;
        while (true) {
            if (currentNode.value === value)
                return true;
            else if (value > currentNode.value)
                currentNode = currentNode.right;
            else if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            if (currentNode === null) {
                return false;
            }
        }
    }
}

const bst = new BinarySearchTree(new Node(20));
bst.insert(new Node(10));
bst.insert(new Node(30));
bst.insert(new Node(25));

console.log(bst.find(30));
console.log(bst.find(29));
console.log(bst.find(25));