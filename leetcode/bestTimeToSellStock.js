/**
 * @param {number[]} prices
 * @return {number}
 */

// Brute force approach
// var maxProfit = function(prices) {
//   if (!prices.length) return 0;

//   let maxProfit = 0;

//   for (let buyDay = 0; buyDay < prices.length - 1; buyDay++) {
//     for (let sellDay = buyDay + 1; sellDay < prices.length; sellDay++) {
//       let currProfit = prices[sellDay] - prices[buyDay];
//       if (currProfit > maxProfit) {
//         maxProfit = currProfit;
//       }
//     }
//   }

//   return maxProfit;
// };

var maxProfit = function(prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i in prices) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// naive approach is nested for loop
// first loop to go through and treat each day as the "buy price"
// second loop to treat each day as the "sell price"
// keep track of most profit and sell day
