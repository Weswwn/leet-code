/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    coins.sort((a,b) => {
        return a - b;
    })
    let minNumOfCoins = Infinity;
    if (amount === 0) {
        return 0;
    }
    var recurse = (coinPermutation, coinCount, currCoin) => {
        if (coinPermutation > amount) {
            return;
        }
        if (amount - coinPermutation === 0) {
            if (coinCount < minNumOfCoins) {
                minNumOfCoins = coinCount;
                return;
            }
            return;
        }
        for (let coin = currCoin; coin >= 0; coin--) {
            recurse(coinPermutation + coins[currCoin], coinCount + 1, coin);
        }  
    }
    recurse(0, 0, coins.length - 1);
    return minNumOfCoins === Infinity ?  -1 : minNumOfCoins;
};
console.log(coinChange([186,419,83,408], 6249));