const fetch = require('node-fetch');

// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => response.json())
//     .then(data => console.log(data));
const fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json());
const fetch2 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json());


Promise.all([fetch1, fetch2]).then(values => {
    console.log(values);
    values.forEach(value => console.log(value));
})

// Promise.all([fetch1, fetch2])
//     .then((responses) => {
//         responses.forEach(response => {
//             response.json()
//                 .then(data => console.log(data));
//         })
//     })
//     .catch(error => console.log(error));