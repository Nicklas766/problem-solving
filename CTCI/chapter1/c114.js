/**
 * 1.4 Palindrome Permutation:
 * 
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word  or phrase that is the same forwards and backwards. 
 * A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
 * 
 */


// 1. Palindrome: a plaindrome can only have one odd amount of characters.
// 2. A permutation is a rearrangement of letters.
// 3. Case sensitive

const isPermutationPalindrome = (permutation) => {
    const hashMap = {};

    for (let char of permutation.split(' ').join('')) {
        if (hashMap[char]) {
            hashMap[char] += 1;
        } else {
            hashMap[char] = 1;
        }
    }

    let amountOfOddSetOfChars = 0;

    for (let int of Object.values(hashMap)) {
        // amountOfOddSetOfChars += int % 2 <-- could've worked
        if (int & 1) {
            amountOfOddSetOfChars++;
        }
    }

    if (amountOfOddSetOfChars > 1) {
        return false;
    }
    else {
        return true;
    }
}

console.log(isPermutationPalindrome('rraad')) // radar
console.log(isPermutationPalindrome('tact  coa'))
console.log(isPermutationPalindrome('racecar'))
console.log(isPermutationPalindrome('hello'))