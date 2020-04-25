/**
 * 1.9 String Rotation:
 * 
 * Assume you have a method isSubstring which checks if one word is a
 * substring of another. Given two strings, s1 and s2, write code to check if s2 is
 * a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a
 * rotation of "erbottlewat").
 */


// this works because somewhere in str1 + str1 we must find str2 if possible to achieve str2 with rotation
const isRotation = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    return isSubstring(str1+str1, str2)
}
const isSubstring = (str1, str2) => {
    return str1.includes(str2)
}

console.log(isRotation('waterbottle', 'erbottlewat'))
console.log(isRotation('cat', 'dog'))