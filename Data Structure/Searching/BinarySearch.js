function binarySearch(arr, num) {
    for (let i = 0, j = arr.length - 1; i <= j;) {
        const avg = Math.floor((i + j) / 2);
        if (arr[avg] === num) {
            return avg;
        } else if (arr[avg] < num) {
            i = avg + 1;
        } else if (arr[avg] > num) {
            j = avg - 1;
        }

    }
    return -1;

}

console.log(binarySearch([1, 2, 3, 4, 5], 5));