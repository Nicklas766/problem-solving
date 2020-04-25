/**
 * Sock Merchant
 */

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    const collected = ar.reduce((acc, curr) => {
        curr in acc ? acc[curr] += 1 : acc[curr] = 1;
        return acc;
    }, {});

    return Object.keys(collected).reduce((acc, curr) => {
        const val = collected[curr] & 1 ? (collected[curr] - 1) / 2 : collected[curr] / 2
        return acc + val;
    }, 0)
}