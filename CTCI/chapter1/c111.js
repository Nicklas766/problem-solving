/**
 * 1.1 Is Unique: 
 * 
 * Implement an algorithm to determine if a string has all 
 * unique characters. What if you cannot use additional data structures?
 * 
 * note: These solutions are not valid since they use data structures!
 */

const testCase1 = 'Hello';
const testCase2 = 'World';

const isUnique = (string) => {
    return string.length === new Set(string.split('')).size;
}

const isUniqueWithLoop = (string) => {
    const arr = [];

    for (let char of string) {
        if (arr.includes(char) === false) {
            arr.push(char);
        }
    }

    return arr.length === string.length;
}

console.log(isUnique(testCase1)); // false
console.log(isUnique(testCase2)); // true
console.log(isUniqueWithLoop(testCase1)); // false
console.log(isUniqueWithLoop(testCase2)); // true