/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (n) {
   let hand = ['R','P','S'];
   let resultArray = [];
   let recurse = (permutation) => {
     if (permutation.length === n) {
       resultArray.push(permutation);
       return;
     }
     
     hand.forEach(play => recurse(permutation + play))
   }
   recurse('')
   return resultArray;
};

console.log(rockPaperScissors(4));