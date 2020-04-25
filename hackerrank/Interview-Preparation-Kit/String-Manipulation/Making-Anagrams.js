/**
 * Strings: Making Anagrams
 */

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    const aArr = a.split('');
    const bArr = b.split('');
    const chars = {};
    let count = 0;

    for (let char of aArr) {
        if (chars[char]) {
            chars[char] += 1;
        } 
        else {
            chars[char] = 1;
        }
    }


    for (let char of bArr) {
        if (chars[char]) {
            chars[char] -= 1;
        } 
        else {
            chars[char] = -1;
        }
    }

    for (let char of Object.keys(chars)) {
        count += Math.abs(chars[char]);
    }

    return count;

}