var divisor = (n, k) => {
  let nString = n.toString();
  let totalCount = 0;

  var recurse = (kDigit) => {
    console.log(kDigit);
    if (kDigit.length === k) {
      if (n % parseInt(kDigit) === 0) {
        console.log(kDigit);
        totalCount++;
        return;
      } else {
        return;
      }
    }
    for (let i = 0; i < nString.length; i++) {
      if ((i + k) - 1 === nString.length && kDigit.length === 0) {
        break;
      }
      recurse(kDigit + nString[i])
    }
  }
  recurse('');
  return totalCount;
}

console.log(divisor(555,1));