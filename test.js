// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function popularNToys(numToys, topToys, toys, 
  numQuotes, quotes)
{
// WRITE YOUR CODE HERE
let toyObj = {};
for (let i = 0; i < toys.length; i++) {
toyObj[toys[i]] = 1;
}

for (let i = 0; i < quotes.length; i++) {
  for (let key in toyObj) {
    if (quotes[i].includes(toyObj[key])) {
    console.log(key);
    toyObj[key]++;
    console.log(toyObj[key]);
  }
}
}
// console.log(toyObj);
}
// FUNCTION SIGNATURE ENDS
console.log(popularNToys(5,2, ['anacell', 'betacellular', 'cetracular', 'deltacellular', 'euroecll'], 3));