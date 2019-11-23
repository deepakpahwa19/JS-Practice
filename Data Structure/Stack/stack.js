const stack = (() => {
    const arr = [];

    const push = (ele) => {
        arr.push(ele);
    }

    const pop = () => {
        return arr.pop();
    }

    const print = () => {
        for (const item of arr) {
            console.log(item);
        }
    }

    return {
        push, pop, print
    }
})();

stack.push(10);
stack.push(11);
stack.push(12);
stack.push(13);
stack.push(14);
stack.print();
console.log("================");
console.log(stack.pop());
console.log(stack.pop());
console.log("================");
stack.print();
