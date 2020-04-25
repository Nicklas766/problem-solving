/**
 * 1.7 Rotate Matrix: 
 * 
 * Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
 * write a method to rotate the image by 90 degrees. Can you do this in place? 
 * 
 */

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const rotatedMatrix = [
    [7, 4, 1]
    [8, 5, 2],
    [9, 6, 3]
]


/**
 * https://www.youtube.com/watch?v=VDw9y6nX_ss
 * 
 * create transponedMatrix
 * 
 * columns are how many things in a row
 * rows are how many rows..
 *
 * The following has 2 rows and 3 columns in each row 
 * [
 *  [1, 2, 3],
 *  [3, 4, 5]
 * ]
 * 
 * The new structure when transponed will be:
 * [
 *  [],
 *  [],
 *  []
 * ]
 * 
 * Math: a matrix obtained from a given matrix by interchanging each row and the corresponding column.
 */

const transponeMatrix = (matrix) => {

    const rows = matrix.length;
    const columns = matrix[0].length;

    const new2DArr = Array.from(Array(columns), () => new Array(rows));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            new2DArr[j][i] = matrix[i][j];
        }
    }

    return new2DArr;
}

console.log(transponeMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]))

console.log(transponeMatrix([
    [1,2,3],
    [4,5,6]
]))
console.log(transponeMatrix([
    [1,2],
    [3,4]
]))
 
/**
 * array by reference
 * 
 * transpone square matrix då inner loopen är baserad på N
 * here we swap the values so we do not create a new
 */
const transponeSquareMatrix = (matrix) => {

    const N = matrix.length;

    for (let i = 0; i < N; i++) {
        for (let j = i; j < N; j++) {
            const tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }

    return matrix;
}


const transponedMatrix = transponeSquareMatrix(matrix);
console.log(transponedMatrix)
/**
 * 
 * 
 */
const twoPointMatrix = (matrix) => {
    const N = matrix.length;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < (N / 2); j++) {
            const tmp = matrix[i][j];
            matrix[i][j] = matrix[i][N - 1 - j];
            matrix[i][N - 1 - j] = tmp;
        }
    }

    return matrix;
}

const rotated90DegreesMatrix = twoPointMatrix(transponedMatrix);

console.log(rotated90DegreesMatrix)

