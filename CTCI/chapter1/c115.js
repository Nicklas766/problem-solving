/** 
 * 1.5 One Away:  There are three types of edits that can be performed on strings:  
 * 
 * 1. insert  a  character
 * 2. remove  a  character
 * 3. or replace  a  character
 * 
 *  Given two strings, write a function to check if they are one edit (or zero edits) away.  
 * 
 * EXAMPLE:
 * pale, pie   ->  true 
 * pales, pale ->  true  
 * pale, bale  ->  true  
 * pale, bake  ->  false
 * 
*/


const isOneReplaceAway = (str1, str2) => {

    let containsOneNotEqual = false;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {

            if (containsOneNotEqual) {
                return false;
            }

            containsOneNotEqual = true;
        }
    }

    return true;
}

/**
 * Checks if we can insert a char to str1 in order to create str2
 *  
 * if we would have looped the entire str without having to edit then it would have required a remove
 * 
 * acd
 * abcd true
 *
 */
const isOneInsertOrRemoveAway = (str1, str2) => {
    let 
    index1 = 0,
    index2 = 0;

    while (index1 < str1.length && index2 < str2.length) {
        if (str1[index1] !== str2[index2]) {
            if (index1 !== index2) {
                return false;
            }
            index2++;
        } else {
            index1++;
            index2++;
        }
    }


    return true;
}

const isOneEditAway = (str1, str2) => {
    if (str1.length === str2.length) {
        return isOneReplaceAway(str1, str2);
    } 
    else if (str1.length - str2.length === -1) {
        return isOneInsertOrRemoveAway(str1, str2);
    }
    else if (str1.length - str2.length === 1) {
        return isOneInsertOrRemoveAway(str2, str1);
    }

    return false;
}


console.log(isOneEditAway('pale', 'bale') === true)
console.log(isOneEditAway('pale', 'pale') === true)
console.log(isOneEditAway('pale', 'bake') === false)

console.log(isOneEditAway('pale', 'elape')  === false)
console.log(isOneEditAway('pale', 'palea')  === true)

console.log(isOneEditAway('pale', 'ple')  === true)
console.log(isOneEditAway('pales', 'pale')  === true)
console.log(isOneEditAway('paleabc', 'pleabc') === true)
console.log(isOneEditAway('pale', 'ble') === false)
console.log(isOneEditAway('a', 'b') === true)
console.log(isOneEditAway('', 'd') === true)
console.log(isOneEditAway('d', 'de') === true)
console.log(isOneEditAway('pale', 'pse') === false)
console.log(isOneEditAway('ples', 'pales') === true)
console.log(isOneEditAway('pale', 'pas') === false)
console.log(isOneEditAway('pas', 'pale') === false)
console.log(isOneEditAway('pale', 'pkle') === true)
console.log(isOneEditAway('pkle', 'pable') === false)
console.log(isOneEditAway('pal', 'palks') === false)
console.log(isOneEditAway('palks', 'pal') === false)
