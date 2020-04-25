function hourglassSum(arr) {
    const maxIndex = 5;
    const minIndex = 0;

    const getRow = (arr, columnIndex, rowIndex) => {
        let totalCost = arr[columnIndex][rowIndex];

        totalCost += arr[columnIndex][rowIndex - 1];
        
        totalCost += arr[columnIndex][rowIndex + 1];
        
        return totalCost;
    }

    const getHourGlass = (arr, columnIndex, rowIndex) => {
        let totalCost = getRow(arr, columnIndex, rowIndex);

        totalCost += arr[columnIndex + 1][rowIndex];

        totalCost += getRow(arr, columnIndex + 2, rowIndex);

        return totalCost;
    }

    const canBeHourGlass = (arr, columnIndex, rowIndex) => {
        return (rowIndex - 1 >= minIndex) && (rowIndex + 1 <= maxIndex) && (columnIndex + 1 <= maxIndex) && (columnIndex + 2 <= maxIndex);
    }


    const values = [];
    for (let column = 0; column < arr.length; column++) {
        for (let row = 0; row < arr.length; row++) {
            if (canBeHourGlass(arr, column, row)) {
                values.push(getHourGlass(arr, column, row))
            }
        }
    }

    return Math.max(...values);

}