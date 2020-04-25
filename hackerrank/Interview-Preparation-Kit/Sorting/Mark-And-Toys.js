/**
 * Mark And Toys
 */

function maximumToys(prices, k) {
    return prices.sort((a, b) => a - b).reduce((acc, curr) => {

        if (curr <= k) {
            k -= curr;
            return acc + 1;
        }
        return acc;
        
    }, 0)
}