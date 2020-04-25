/**
 * Find Merge Point of Two Lists
 */

function findMergeNode(headA, headB) {
    let currentA = headA, currentB = headB;
    const hash = new Map();

    while (currentA.next !== null) {
        hash.set(currentA, 1);
        currentA = currentA.next;
    }

    while (currentB.next !== null) {
        if (hash.get(currentB)) {
            return currentB.data;
        }
        
        currentB = currentB.next;
    }

    return currentB.data;
}