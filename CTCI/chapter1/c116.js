/**
 * 1.6 String Compression: 
 * 
 * Implement a method to perform basic string compression using the counts of 
 * repeated  characters.  For  example,  the  string  aabcccccaaa  would  become  a2blc5a3,
 * If the "compressed" string would not become smaller than the original string, your method should
 * return  the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 * 
 */


// JavaScript bör optimisera string concationen men fortfarande inte så bra.

const getCompressedString = (str) => {

    let newString = '';

    let prevChar = str[0];
    let currCount = 0;

    for (let i = 0; i <= str.length; i++) {
        
        if (prevChar !== str[i]) {
            newString += prevChar + currCount;
            currCount = 0;
        }

        currCount++;
        prevChar = str[i];
    }


    return newString.length > str.length ? str : newString;

}

console.log(getCompressedString('ab'));
console.log(getCompressedString('aabcccccaaa'));
console.log(getCompressedString('aabcccccaaa') === 'a2blc5a3');

