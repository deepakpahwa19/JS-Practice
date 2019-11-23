function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let ch of str1) {
        frequencyCounter1[ch] = (frequencyCounter1[ch] || 0) + 1;
    }

    for (let ch of str2) {
        frequencyCounter2[ch] = (frequencyCounter2[ch] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        console.log(key);
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram('anagram','nagaram'));