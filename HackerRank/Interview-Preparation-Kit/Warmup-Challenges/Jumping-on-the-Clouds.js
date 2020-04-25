/**
 * Jumping on the Clouds
 */

function jumpingOnClouds(n, c) {
    let jumps = 0;
    let count = 0;

    while (count < n - 1) {
        if (count + 2 < n && c[count + 2] !== 1) {
            count++;
        } 
        count++;
        jumps++;
    }

    return jumps;
}