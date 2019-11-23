class BinaryHeap {

    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleup();
    }

    bubbleup() {
        let i = this.values.length - 1;
        while (i > 0) {
            const parentIndex = Math.floor((i - 1) / 2);
            if (this.values[parentIndex] > this.values[i]) break;
            [this.values[i], this.values[parentIndex]] = [this.values[parentIndex], this.values[i]];
            i = parentIndex;
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        return max;
    }

    sinkDown() {
        for (let index = 0; this.values[index] < this.values[2 * index + 1] || this.values[index] < this.values[2 * index + 2];) {
            const firstChildIndex = 2 * index + 1, secondChildIndex = 2 * index + 2;
            if (this.values[firstChildIndex] < this.values[secondChildIndex]) {
                [this.values[index], this.values[secondChildIndex]] = [this.values[secondChildIndex], this.values[index]];
                index = secondChildIndex;
            } else {
                [this.values[index], this.values[firstChildIndex]] = [this.values[firstChildIndex], this.values[index]];
                index = firstChildIndex;
            }
        }

    }

    print() {
        this.values.map(value => {
            console.log(value + ' ');
        })
    }

}

const binaryHeap = new BinaryHeap();
binaryHeap.insert(55);
binaryHeap.insert(39);
// binaryHeap.insert(12);
// binaryHeap.insert(27);
// binaryHeap.insert(33);
// binaryHeap.insert(41);
// binaryHeap.insert(18);

binaryHeap.print();
console.log('-------------------')
console.log(binaryHeap.extractMax());
console.log('-------------------')
binaryHeap.print();