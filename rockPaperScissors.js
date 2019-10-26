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
  // TODO: your solution here
  let resultArray = [];
  var options = ['R','P','S'];
  var playRound = (hands) => {
    if (hands.length === n) {
      resultArray.push(hands);
      return;
    }
    for (var i = 0; i < options.length; i++) {
      playRound(hands + options[i]);
    }
  }
  playRound('');
  return resultArray;
};

console.log(rockPaperScissors(3));