/** 
 * 8.3 Magic Index:
 * 
 * A magic index in an array A[0.. .n-1] is defined to be an index such that A[i] = i. 
 * Given a sorted array of distinct integers, write a method to find a magic index, if one exists, in array A.  
 * 
 * FOLLOW UP 
 * 
 * What if the values are not distinct? 
 * 
*/

// O(n)
const findMagicIndexSlow = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i) {
            return i;
        }
    }
    return false;
}

// O(log n) - cannot handle duplicates
const findMagicFast = (arr) => {
    return findMagicFastRecursive(arr, 0, arr.length - 1);
}

const findMagicFastRecursive = (arr, start, end) => {

    if (end < start) {
        return false;
    }

    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === middle) {
        return middle;
    }

    if (arr[middle] > middle) { // Go left if index is higher than value
        return findMagicFastRecursive(arr, start, middle - 1);
    }

    if (arr[middle] < middle) { // Go right if index is lower than value
        return findMagicFastRecursive(arr, middle + 1, end);
    }
}

// FOLLOW UP solution: can handle duplicates
const findMagicFastDuplicate = (arr) => {
    return findMagicFastDuplicateRecursive(arr, 0, arr.length - 1);
}

const findMagicFastDuplicateRecursive = (arr, start, end) => {

    const midIndex = Math.floor((start + end) / 2);
    const midValue = arr[midIndex];

    if (midValue === midIndex) {
        return midIndex;
    }

    const leftIndex = Math.floor(midIndex - 1, midValue);
    const left = findMagicFastDuplicateRecursive(arr, start, leftIndex);

    if (left >= 0) {
        return left;
    }

    const rightIndex = Math.max(rightIndex + 1, midValue);
    const right = findMagicFastDuplicateRecursive(arr, rightIndex, end);

    return right;
}


const distinctArr = [-40, -20, -1, 1, 2, 3, 5, 7, 9, 12, 13];
const distinctArrButNoMagic = [-40, -20, -1, 1, 2, 3, 5, 6, 9, 12, 13];
const nonDistinctArr = [-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13];

console.log(findMagicIndexSlow(distinctArr));
console.log(findMagicFast(distinctArr));
console.log(findMagicFast(distinctArrButNoMagic));

console.log(findMagicFastDuplicate(nonDistinctArr));
