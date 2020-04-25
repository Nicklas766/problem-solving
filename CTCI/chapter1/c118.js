/** 
* 1.8 Zero Matrix: 
* 
* Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
* 
*/

const zeroMatrix = (matrix) => {
    
    const COLUMNSTOBENULLED = []

    const ROWS = matrix.length;
    const COLUMNS = matrix[0].length;

    for (let i = 0; i < ROWS; i++) {

        let rowShouldBeNulled = false;
        for (let j = 0; j < COLUMNS; j++) {
            
            if (matrix[i][j] === 0) {
                COLUMNSTOBENULLED.push(j);
                rowShouldBeNulled = true;
            }
        }

        if (rowShouldBeNulled) {
            matrix[i] = Array(COLUMNS).fill(0);
        }
    }

    // Null all the columns
    for (let columnIndex of COLUMNSTOBENULLED) {
        for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
            matrix[rowIndex][columnIndex] = 0;
        }
    }

    return matrix;
}


const testCase1 = [
    [1, 1, 1],
    [1, 1, 1],
    [0, 1, 0]
]

// const testCase2 = [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1]
// ]

console.log(zeroMatrix(testCase1))

// console.log(zeroMatrix(testCase2))


// const zeroMatrix2 = (matrix) => {
    
//     const ROWS = matrix.length;
//     const COLUMNS = matrix[0].length;

//     for (let i = 0; i < ROWS; i++) {
//         if (matrix[i].includes(0)) {
//             matrix[i] = Array(COLUMNS).fill(0);
//         }
//     }

//     return matrix;
// }

// console.log(zeroMatrix2(testCase1))

// console.log(zeroMatrix2(testCase2))