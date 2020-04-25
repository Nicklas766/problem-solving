/**
 * Balanced Brackets
 */

// NOTE, BAD CODE!!!!!!!!

function isBalanced(s) {

    const openingBracket = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    const recur = (newString, stack = []) => {

        const char = newString[0];

        if (newString === '') {
            if (stack.length > 0) {
                return 'NO'
            }
            return 'YES';
        }

        const isClosing = [')', ']', '}'].includes(char)

        if (isClosing && stack[stack.length - 1] === openingBracket[char]) {
            stack.pop();

            return recur(newString.slice(1), stack);
        }
        else if (isClosing) {
            return 'NO'
        }

        stack = [...stack, newString[0]]

        return recur(newString.slice(1), stack)
    }

    return recur(s);
}