/**
 * Alternating Characters
 */

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    const arr = s.split('');
    
    return arr.reduce((acc, curr, index) => {
        if (arr[index - 1] === curr) {
            return acc + 1;
        }
        return acc;
    },0)

}