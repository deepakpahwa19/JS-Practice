

function bigIntegerFactorial(num){
    if(num === 1){
        return 1;
    }
    return num * bigIntegerFactorial(num-1);
}

console.log(parseInt(bigIntegerFactorial(25)));