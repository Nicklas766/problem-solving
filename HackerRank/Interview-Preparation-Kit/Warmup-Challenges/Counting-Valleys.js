/**
 * Counting Valleys
 */

function countingValleys(n, s) {
    let valleys = 0;
    let alt = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === 'U') {
            if (alt === -1) {
                valleys++;
            }
            alt++;
        }
        if (s[i] === 'D') {
            alt--;
        }
    }

    return valleys;
}
