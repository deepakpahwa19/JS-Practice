function minimumBribes(q) {
	let bribes = 0;
	for (let i = q.length - 1; i >= 0; i--) {
		if (q[i] - i > 3) {
			bribes = 'Too chaotic';
			break;
		}
		if (q[i] - i - 1 > 0) {
			bribes += q[i] - i - 1;
		}
	}
	console.log(bribes);
}

minimumBribes([ 1, 2, 5, 3, 7, 8, 6, 4 ]);
