var divisor = (n, k) => {
  let nString = n.toString();
  let totalCount = 0;
  let recurse = (permutation, index) => {
    console.log(permutation);
    if (permutation.length === k) {
      if (n % Number(permutation) === 0) {
        totalCount++;
        return;
      }
      return;
    }
    for (let i = 0; i < nString.length; i++) {
      if ((i + k) + 1 === nString.length && nString.length === 0) {
        break;
      }
      recurse(permutation + nString[i])
    }
  }
  recurse('', 0);
  return totalCount;
}

console.log('Total Count:', divisor(2345 , 2));