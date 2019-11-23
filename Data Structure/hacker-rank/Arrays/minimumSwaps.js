function minimumSwaps(arr) {
	let swaps = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === i + 1) {
			continue;
        }
        [arr[arr[i]-1],arr[i]] = [arr[i],arr[arr[i]-1]];
        // [arr[i],arr[arr[i]-1]] = [arr[arr[i]-1],arr[i]];
		i--;
        swaps++;
    }
    console.log(swaps);
}
minimumSwaps([ 1, 3, 5, 2, 4, 6, 7 ]);
