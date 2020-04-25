/**
 * Sorting: Bubble Sort 
 */
function countSwaps(n, a) {
    let swaps = 0;
    for (let i = 0; i < n; i++) {
        
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                let tmp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tmp;
                swaps++;
            }
        }
    }

    console.log(`Array is sorted in ${swaps} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length-1]}`)
}