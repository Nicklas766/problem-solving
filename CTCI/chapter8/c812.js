/** 
 * 8.2 Robot in a Grid:
 * 
 * 
 * Imagine a robot sitting on the upper left corner of grid with 
 * r rows and c columns. The robot can only move in two directions, right and down, 
 * but certain cells are "off limits" such that the robot cannot step on them. 
 * 
 * Design an algorithm to find a path for the robot from the top left to the bottom right. 
 * 
*/


const createPoint = (row, column) => [row, column]; // will be coerced to string string(num,num)

const getPath = (maze) => {
    
    if (maze === undefined || maze.length === 0) {
        return null;
    }
    
    const path = [];
    const failedPoints = {};

    // note how we start at the end (bottom right corner) because we will use recursion
    if (getPointForPath(maze, maze.length - 1, maze[0].length - 1, path, failedPoints)) {
        return path;
    }

    return null;

}

const getPointForPath = (maze, row, column, path, failedPoints) => {

    if (row < 0 || column < 0 || !maze[row][column]) {
        return false;
    }

    const point = createPoint(row, column);

    if (failedPoints[point]) {
        return false;
    }

    const isAtStartPoint = (row === 0 && column === 0);

    // either we're at start which means we've found a full path
    // else we see if right is an acceptable move, else if bottom is acceptable move!
    if (isAtStartPoint || getPointForPath(maze, row, column - 1, path, failedPoints) || getPointForPath(maze, row - 1, column, path, failedPoints)) {
        path.push(point); // add the point to the path!
        return true; // return true to make sure the recursion works!
    }

    failedPoints[point] = 1; // add the point to failed points!
    return false; // return false to make sure the recursion works!
}


const mazeWithOnlyOneAcceptablePath = [
    [true, true, true],
    [true, false, true],
    [false, true, true],
]

console.log(getPath(mazeWithOnlyOneAcceptablePath));

const mazeWithMultipleAcceptablePaths = [
    [true, false, false],
    [true, true, false],
    [true, true, true],
    [false, true, true],
    [false, true, true],
    [true, true, true],
    [true, true, true],
    [true, true, false],
    [true, true, false],
    [true, true, true],
    [true, true, true],
    [true, true, true],
    [true, true, true],
    [true, true, true],
    [true, true, false],
    [true, true, false],
    [true, true, true],
    [true, true, true],
    [true, true, true],
    [true, true, true],
    [true, true, true],
    [true, false, true],
    [true, false, true],
    [true, true, true],
    [true, true, true],
    [false, true, true],
    [true, true, true],
    [true, true, true],
    [true, false, true],
    [true, false, true],
    [true, true, true],
    [true, true, true],
    [false, true, true],
    [true, true, true],
    [true, true, true]
]

console.log(getPath(mazeWithMultipleAcceptablePaths));