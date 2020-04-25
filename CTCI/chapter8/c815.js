/** 
 * 8.5 Recursive Multiply:
 * 
 * Write a recursive function to multiply two positive integers without using the * operator. 
 * You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.
*/


function multiply(a, b) {
    // This is since we get the same result but have to add with less steps
    // for example, 5 * 1000 = 5+5+5+5+5+5+5+5+5+5+5+... = 5000
    // instead of 1000 * 5 = 1000 + 1000 + 1000 + 1000 + 1000 = 5000

    // n = smaller
    // num = bigger
    const smaller = a < b ? a : b;
    const bigger = a > b ? a : b;
    return multiplyNumbers(bigger, smaller);
}

function multiplyNumbers(num, n, acc = 0, originalN = n) {
    if (n === 0) {
        return acc;
    }

    // We divide N and make it so we get half of the prod so we can add it to get the full product
    // meaning we also divide the work in half . this requires it to be even however.
    if (originalN / 2 === n) {
        return acc + acc;
    }

    return multiplyNumbers(num, n - 1, acc + num, originalN);
}


console.log(multiply(2, 2));
console.log(multiply(3, 6));
console.log(multiply(5, 10));
console.log(multiply(10, 5));

console.log(multiply(5, 1000));
console.log(multiply(1000, 1000));

// The CTCI solution uses a similiar approach as to above, but this one keep dividing which makes it much faster
// it also works with uneven amount of mulitplies aswell.

const minProduct = (a, b) => {
    const bigger = a > b ? a : b;
    const smaller = a < b ? a : b;
    return helper(smaller, bigger);
}

const helper = (smaller, bigger) => {
    if (smaller === 0) {
        return 0;
    } else if (smaller === 1) {
        return bigger;
    }

    const s = smaller >> 1;
    const halfProd = helper(s, bigger);

    if (smaller % 2 === 0) {
        return halfProd + halfProd;
    } else {
        return halfProd + halfProd + bigger;
    }
}


console.log(minProduct(2, 2));
console.log(minProduct(3, 6));
console.log(minProduct(5, 10));
console.log(minProduct(10, 5));

console.log(minProduct(5, 1000));
console.log(multiply(1000, 1000));