function arrayManipulation(n, queries) {
	let arr = [],
		max = 0;
	for (let i = 1; i <= n; i++) {
		arr.push(0);
	}
	queries.forEach((query) => {
		arr[query[0] - 1] += query[2];
		if (query[1] < n) {
			arr[query[1]] -= query[2];
		}
	});
	for (let i = 1; i < arr.length; i++) {
		arr[i] += arr[i - 1];
	}
	for (const val of arr) {
		max = Math.max(max, val);
	}

	return max;
}

console.log(arrayManipulation(10, [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]));

// const arr = [ 1, 2, 3, 4, 5 ];

// const arr = new Array(0, 5);
// console.log(arr);
