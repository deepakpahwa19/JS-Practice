function countUniqueValues(arr) {
    if (arr.length === 0) return 0;

    let i =0;
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[i]) {
            i++;
            arr[i] = arr[j];
        } 
    }

    return i;
}