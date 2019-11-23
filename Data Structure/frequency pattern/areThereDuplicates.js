function areThereDuplicates(...arr) {
    const frequencyCounter = {};
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i];
        frequencyCounter[temp] ? flag = true : frequencyCounter[temp] =  1;
    }
    return flag;

}
console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));