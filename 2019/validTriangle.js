var validTriangle = (array) => {
    var largest = -Infinity;
    var largestIndex = 0;
    if (array.length < 3) {
        return false;
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i];
            largestIndex = i;
        }
    }

    var numberTracker = {};
    var prev = array[0];
    numberTracker[prev] = prev;
    for (var z = 1; z < largestIndex + 1; z++) {
        if (numberTracker[array[z]]) {
            return false;
        }
        if (array[z] > array[largestIndex] || array[z] < prev) {
            return false;
        }
        numberTracker[array[z]] = array[z];
        prev = array[z];
    }

    if (array[largestIndex + 1] > largest) {
        return false;
    }


    prev = array[largestIndex + 1];
    for (var z = largestIndex + 1; z < array.length; z++) {
        if (numberTracker[array[z]]) {
            return false;
        }
        if (array[z] > prev) {
            return false;
        } else {
            prev = array[z];
        }
    }
    return true;
}

console.log(validTriangle([1,7,8,10,5,2,0])) // true
console.log(validTriangle([1,9,8,10,5,2,0])) // false
console.log(validTriangle([1,7,8,10,11,2,0])) // true;
console.log(validTriangle([1,7,8,10,5,2,0])) // true
console.log(validTriangle([1,7,8,10,5,9,0])) // false
console.log(validTriangle([1,7,2]));
console.log(validTriangle([1]));
console.log(validTriangle([1,7]));
console.log(validTriangle([]));