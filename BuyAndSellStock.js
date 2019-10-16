/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit = 0;
    for (var i = 0; i < prices.length; i++) {
        for (var y = i + 1; y < prices.length; y++) {
            if (prices[y] > prices[i]) {
                if ((prices[y] - prices[i]) > profit) {
                    profit = prices[y] - prices[i];
                }   
            }
        }
    }
    return profit;
};

console.log(maxProfit([7,6,4,3,1]));