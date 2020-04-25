/** 
 * 8.7 Permutations without Dups: 
 * 
 * Write a method to compute all permutations of a string of unique characters.
 * 
 * 
*/

const permStringWithUniqueChars = (perm) => {
    const answers = [];

    const permutate = (currPerm, remainingStr) => {

        if (remainingStr === '') {
            // 1. abc, acb
            // 2. bac, bca
            // 3. cab, cba
            answers.push(currPerm);
        } 
        else {
            // 1. p('a', 'bc') -> p('ab', 'c') and p('ac', 'b') -> p('abc', '') and p('acb', '')
            // 2. p('b', 'ac') -> p('ba', 'c') and p('bc', 'a') -> p('bac', '') and p('bca', '')
            // 3. p('c', 'ab') -> p('ca', 'b') and p('cb', 'a') -> p('cab', '') and p('cba', '')
            for (let i = 0; i < remainingStr.length; i++) {
                permutate(currPerm + remainingStr[i], remainingStr.slice(0, i) + remainingStr.slice(i + 1))
            }
        }
    }

    permutate('', perm);
    return answers;
}

console.log(permStringWithUniqueChars('abc'));