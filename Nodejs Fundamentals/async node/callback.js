function add(x, y, callback) {
    setTimeout(() => {
        callback(x + y)
    }, 2000)
}

add(2, 3, (result) => console.log(result));