/**
 * Repeated String
 */

function repeatedString(s, n) {

    const occurrence = s.split('').reduce((acc, curr) => curr === 'a' ? acc + 1 : acc, 0);
    let totalCount = 0;

    totalCount = Math.floor(n / s.length) * occurrence;


    for (let i = 0; i < n % s.length; i++) {
        if (s[i] === 'a') {
            totalCount++;
        }
    }

    return totalCount;
}