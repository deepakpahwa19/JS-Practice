function rotLeft(a, d) {
    const arr = a.splice(0,d);
    a.push(...arr);
    console.log(a);
}

rotLeft([ 1, 2, 3, 4, 5 ], 2);
