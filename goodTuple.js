var goodTuple = (arr) => {
    let tupleCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let tempCount = 0;
        let solo = false;
        let obj = {};
        let stepCounter = 0;
        let index = i;
        if (i + 3 > arr.length) {
            break;
        }
        while (stepCounter < 3) {
            if (obj[arr[index]]) {
                if (tempCount === 2) {
                    continue;
                } else {
                    tempCount += 2;
                }
            } else {
                obj[arr[index]] = arr[index];
            }
            stepCounter++;
            index++;
        }
        if (tempCount === 2 && Object.keys(obj).length === 2) {
            tupleCount++;
        }
    }
    return tupleCount;
}

console.log(goodTuple([111,111,222,111]));