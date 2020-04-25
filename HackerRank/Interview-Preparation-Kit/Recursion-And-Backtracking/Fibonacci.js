/**
 * Recursion: Fibonacci Numbers
 */

const memo = {};
function fibonacci(n) {

    if (n < 2) {
        memo[n] = n;
    }

    if (memo[n] === undefined) {
        memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    }

    return memo[n];
}