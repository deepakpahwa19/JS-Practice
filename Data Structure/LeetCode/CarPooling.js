var carPooling = function (trips, capacity) {

    const arr = [];
    let flag = true;
    for (let trip of trips) {
        if (trip[2] > arr.length) {
            arr.push(...new Array(trip[2] - arr.length));
        }
        for (let i = trip[1] - 1; i < trip[2]; i++) {
            totalPassengers = (arr[i] || 0) + trip[0];
            if (totalPassengers > capacity) {
                return false;
            }
            arr[i] = totalPassengers;
        }
    }
    return flag;
};

console.log(carPooling([[2, 1, 5], [3, 3, 7]], 4));