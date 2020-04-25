const selectionSort = arr => {
    let numOfSwaps = 0;
    for (let i = 0; i < arr.length - 1; i++) {

        let minIndex = i; // it might be already in correct placement

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (i !== minIndex) {
            let tmp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = tmp;
            numOfSwaps++;
        }
    }

    return numOfSwaps;
}

// O(n^2)
// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    return selectionSort(arr);
}