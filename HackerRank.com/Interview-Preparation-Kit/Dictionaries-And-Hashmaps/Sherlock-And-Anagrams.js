/**
 * Sherlock And Anagrams
 */

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    let count = 0;
    // const res = [];

    // const isAnagram = (str1, str2) => {
    //     if (str1.length !== str2.length) return false;

    //     const hash = {};

    //     for (let i = 0; i < str1.length; i++) {
    //         if (hash[str1[i]]) {
    //             hash[str1[i]]++;
    //         } else {
    //             hash[str1[i]] = 1;
    //         }
    //     }

    //     for (let i = 0; i < str1.length; i++) {
    //         if (hash[str2[i]]) {
    //             hash[str2[i]]--;
    //         } else {
    //             return false;
    //         }
    //     }

    //     return true
    // }

    // for (let i = 0; i < s.length; i++) {
    //     for (let j = i + 1; j < s.length + 1; j++) {
    //         res.push(s.slice(i, j));
    //     }
    // }

    // for (let i = 0; i < res.length; i++) {
    //     for (let j = i + 1; j < res.length; j++) {
    //         if (isAnagram(res[i], res[j])) {
    //             count++;
    //         }
    //     }
    // }


    // Much more efficient than above
    const hash = {};
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            const sortedStr = s.slice(i, j).split('').sort().join('');

            if (hash[sortedStr]) {
                hash[sortedStr] += 1;
            } else {
                hash[sortedStr] = 1;
            }
        }
    }

    for (let value of Object.values(hash)) {
        let sum = 0;

        // For example kkkk then
        // (k) kkk is 3
        // k (k) kk is 2
        // k k (k) k is 1

        // so kkkk = 4 - 1 = 3
        // so kkk = 3 - 1 = 2
        // so kkk = 2 - 1 = 1
        for (let i = 1; i < value; i++) {
            sum += value - i;
        }
        count += sum;
    }
    
    return count;
}



// Maybe this is even faster than above because no O(n) sort?
let count = 0;
const res = [];

for (let i = 0; i < s.length; i++) {
for (let j = i + 1; j < s.length + 1; j++) {
    //const sortedStr = s.slice(i, j).split('').sort().join('');
    const str = s.slice(i, j);
    res.push(str)
}
}

const hash = {};
for (let val of res) {
    const sortedStr = val.split('').sort().join('');
    if (hash[sortedStr]) {
        hash[sortedStr] += 1;
    } else {
        hash[sortedStr] = 1;
    }
}

for (let value of Object.values(hash)) {
let sum = 0;

// For example kkkk then
// (k) kkk is 3
// k (k) kk is 2
// k k (k) k is 1

// so kkkk = 4 - 1 = 3
// so kkk = 3 - 1 = 2
// so kkk = 2 - 1 = 1
for (let i = 1; i < value; i++) {
    sum += value - i;
}
count += sum;
}

return count;