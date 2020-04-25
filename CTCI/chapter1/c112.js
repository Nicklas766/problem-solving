/**
 * 1.2 Check Permutation:  
 * 
 * Given two strings, write a method to decide if one is a permutation of the other.
 */

const testCase1 = ['hello', 'llheo'];
const testCase2 = ['nope', 'yes'];

const sortString = (str) => str.split('').sort().join('');

const isPermutation = (str1, str2) => {

    // strings of different lengths cannot be permutations of each other
    if (str1.length !== str2.length) {
        return false;
    }

    return sortString(str1) === sortString(str2);
}


console.log(isPermutation(...testCase1)); // true
console.log(isPermutation(...testCase2)); // false