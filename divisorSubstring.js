var divisor = (n, k) => {
  let nString = n.toString();
  let resultCount = 0;
  let denomTracker = {};
  for (let i = 0; i < nString.length; i++) {
    if ((i + k) - 1 >= nString.length) {
      break;
    }
    let tempString = '';
    tempString += nString[i];

    let count = 1;
    let pointer = i + 1;
    while (count < k) {
      tempString += nString[pointer]
      pointer++;
      count++;
    }
    if (!denomTracker[tempString]) {
      if (n % parseInt(tempString) === 0) {
        resultCount++;
      }
      denomTracker[tempString] = tempString;
    }
  }
  return resultCount;
}

console.log(divisor(555,1));