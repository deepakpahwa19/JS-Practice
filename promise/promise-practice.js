let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolved'), 1000);
    setTimeout(() => reject(new Error('Rejectedddd')), 2000);
});


let promisetwo = new Promise((resolve, reject) => {
    setTimeout(() => resolve([1, 2, 3, 4, 5]), 100);
})

Promise.all([promiseOne, promisetwo])
    .then((values) => console.log(values))
    .catch((error) => console.log(error));



console.log('I am not waiting for the Promise to be completed');
// promisetwo
//     .then(response => console.log(response))
//     .catch(error => console.log(error.message))
//     .finally(() => console.log('Promise completed'));



// promiseOne
//     .then(response => console.log(response))
//     .catch(error => console.log(error.message))
//     .finally(() => console.log('Promise completed'))

