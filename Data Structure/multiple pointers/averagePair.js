function averagePair(arr, expectedAvg) {
    if (arr.length === 0) return false;

    for (let i = 0, j = arr.length - 1; i < j;) {
        const actualAvg = (arr[i] + arr[j]) / 2;
        if (actualAvg === expectedAvg) {
            return true;
        }
        actualAvg > expectedAvg ? j-- : i++;
    }
    return false;

}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));