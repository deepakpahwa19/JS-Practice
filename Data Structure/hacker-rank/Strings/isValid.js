function isValid(s) {
	const frequencyObj = {};
	let max = 0,
		min = 10000000,
		countMax = 0,
		countMin = 0,
		countMid = 0;
	for (const c of s.split('')) {
		frequencyObj[c] = (frequencyObj[c] || 0) + 1;
	}

	for (let key in frequencyObj) {
		min = Math.min(min, frequencyObj[key]);
		max = Math.max(max, frequencyObj[key]);
	}

	for (let key in frequencyObj) {
		if (frequencyObj[key] === max) {
			countMax += 1;
		} else if (frequencyObj[key] === min) {
			countMin += 1;
		} else {
			countMid += 1;
		}
	}

	if ((max >= min + 1) && (countMax === 1 || countMin === 1)) {
		// const difference = s.length - countMax * max - countMin * min;
		if ((countMid === countMax || countMid === countMin)) return 'YES';
		return 'NO';
	}
	else if (max === min) return 'YES';
	else return 'NO';
}

console.log(
	isValid(
		'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'
	)
);
