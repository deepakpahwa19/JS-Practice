// function makeAnagram(a, b) {
// 	const frequencyA = {},
// 		frequencyB = {};
// 	let count = 0;
// 	for (const ele of a.split('')) {
// 		frequencyA[ele] = (frequencyA[ele] || 0) + 1;
// 	}
// 	for (const ele of b.split('')) {
// 		frequencyB[ele] = (frequencyB[ele] || 0) + 1;
// 	}
// 	console.log(frequencyA);
// 	console.log(frequencyB);
// 	for (let key in frequencyA) {
// 		if (!frequencyB[key]) {
// 			count += frequencyA[key];
// 		} else if (frequencyA[key] !== frequencyB[key]) {
// 			count +=
// 				frequencyA[key] > frequencyB[key]
// 					? frequencyA[key] - frequencyB[key]
// 					: frequencyB[key] - frequencyA[key];
// 			frequencyB[key] = 0;
// 		} else frequencyB[key] = 0;
// 	}
// 	for (let key in frequencyB) {
// 		count += frequencyB[key];
// 	}
// 	return count;
// }

function makeAnagram(a, b) {
	const arr = [];

	for (let i = 0; i < 26; i++) {
		arr.push(0);
	}
	for (const c of a.split('')) {
		arr[c.charCodeAt() - 'a'.charCodeAt()] += 1;
	}
	for (const c of b.split('')) {
		arr[c.charCodeAt() - 'a'.charCodeAt()] -= 1;
	}

	return arr.reduce((sum, current) => Math.abs(sum) + Math.abs(current));
}

console.log(makeAnagram('cde', 'abc'));

// const arr = [ 0, 0, 10, 0, 0, 0, 0, 0, 0 ];
// console.log(arr['c'.charCodeAt() - 'a'.charCodeAt()]);

// const arr = [ 1, 2, 3, 4, 5 ];
// console.log(arr.reduce((sum, current) => sum + current));
