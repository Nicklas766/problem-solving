/**
 * Recursion: Davis' Staircase
 */

const memo = {};

function stepPerms(n) {
    
    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        return 0;
    }

    if (memo[n] === undefined) {
        memo[n] = stepPerms(n - 1) + stepPerms(n - 2) + stepPerms(n - 3);
    }
    
    return memo[n];
}