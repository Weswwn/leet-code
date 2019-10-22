/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit = 0;
    var start = 0;
    for (var i = 1; i < prices.length; i++) {
        if ((prices[i] - prices[start]) > profit) {
            profit = prices[i] - prices[start];
        }
        if (prices[i] < prices[start]) {
            start = i;
        }
    }
    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]));