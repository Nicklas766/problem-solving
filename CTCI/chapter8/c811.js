/** 
 * 8.1 Triple Step:
 * 
 * A child is running up a staircase with n steps and can hop either 1 step, 2 steps, 
 * or 3 steps at a time, implement a method to count how many possible ways the child can run up the stairs.
 * 
*/


// O(2^N)
const countWays = n => {

    if (n < 0) {
        return 0;
    } 
    else if (n === 0) {
        return 1;
    }

    return countWays(n - 1) + countWays(n - 2) + countWays(n - 3);
}

// O(n)
const countWaysWithMemo = n => {

    const memo = {};
    return countWays2(n, memo)
}

const countWays2 = (n, memo) => {

    if (n < 0) {
        return 0;
    } 
    else if (n === 0) {
        return 1;
    } 
    else if (memo[n] > -1) {
        return memo[n];
    } 
    else {
        memo[n] = countWays2(n - 1, memo) + countWays2(n - 2, memo) + countWays2(n - 3, memo);
        return memo[n];
    }   
}

console.log(countWaysWithMemo(2))