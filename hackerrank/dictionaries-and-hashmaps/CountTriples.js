function countTriplets(arr, r) {

    const secondVal = {};
    const finisher = {}; // hold count of needed values to complete triplet

    // triplet contains { A, B, C }
    // A = A
    // B = A * R
    // C = A * R * R
    // R = common ratio == times two times two times two
    
    let res = 0;
    for (let a of arr) {

        if (finisher[a]) {
            res += finisher[a];
        }

        if (secondVal[a]) {
            if (finisher[a * r]) {
                finisher[a * r] += secondVal[a];
            } else {
                finisher[a * r] = secondVal[a];
            }
        }

        if (secondVal[a * r]) {
            secondVal[a * r] += 1;
        } else {
            secondVal[a * r] = 1;
        }
    }
    
    return res;
}