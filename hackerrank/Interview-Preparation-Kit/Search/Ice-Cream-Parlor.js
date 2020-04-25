/**
 * Ice Cream Parlor
 */

function whatFlavors(cost, money) {
    const hash = {};

    for (let i = 0; i < cost.length; i++) {
        const complement = money - cost[i];

        if (hash[complement]) {
            console.log(`${hash[complement]} ${i + 1}`);
            return;
        }
        hash[cost[i]] = i + 1; 
    }
}