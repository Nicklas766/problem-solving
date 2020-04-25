/** 
 * 8.4 Power Set: 
 * 
 * Write a method to return all subsets of a set.
 * 
*/

// What is a set? Set (mathematics), a collection of well defined and distinct objects.
// What is a subset? A subset of a set is when all of a sets elements are present in the other set.
// For example:
// A = {1,2,3,4,5}
// B = {2,3}  <-- subset of A

// What is a power set? A power set is a set containing all subsets of a set

// A power set of the set {a,b,c} would look like this: 
// { ∅, {a}, {b}, {c}, {a, b}, {a,c}, {b,c}, {a,b,c} }



// let's create a set { 1, 2, 3 } (but with an array)
const aSet = [1, 2, 3];
// we should get 2^3 subsets

// print
function getAllSubsets(set) {
    const subset = Array.from({length: set.length});
    return helper(set, subset, 0);
}

function helper(set, subset, index) {
    if (index === set.length) {
        console.log(subset);
    } else {
        subset[index] = null;
        helper(set, subset, index + 1);
        subset[index] = set[index];
        helper(set, subset, index + 1)
    }

}

// actual solution
const getSubsets = (set, index) => {
    let allSubsets;

    if (set.length === index) { // base case - add empty set
        allSubsets = [[]];
    } else {
        allSubsets = getSubsets(set, index + 1);
        let item = set[index];
        let moreSubsets = [];

        for (let subset of allSubsets) {
            let newSubset = [item, ...subset];
            moreSubsets = [...moreSubsets, newSubset];
        }
        allSubsets = [...allSubsets, ...moreSubsets];
    }
    return allSubsets;
}
console.log(getSubsets(aSet, 0));

