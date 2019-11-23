function sameFrequency(num1, num2) {

    const frequencyCounter1 = {}, frequencyCounter2 = {};
    while (num1 >= 1) {
        const temp = num1 % 10;
        frequencyCounter1[temp] = (frequencyCounter1[temp] || 0) + 1;
        num1 = parseInt(num1 / 10);
    }

    while (num2 >= 1) {
        const temp = num2 % 10;
        if (frequencyCounter1[temp] === undefined) {
            return false;
        } else if (frequencyCounter1[temp] <= 0) {
            return false;
        }
        frequencyCounter1[temp] = frequencyCounter1[temp] - 1;
        num2 = parseInt(num2 / 10);
    }
    return true;
}

console.log(sameFrequency(22, 222));