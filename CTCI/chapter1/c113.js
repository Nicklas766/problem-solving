/**
* 1.3 URLify:
* 
* Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to  
* hold the additional characters, and that you are given the "true" length of the string. 
* 
* (Note: If  implementing in Java, please use a character array so that you can perform this operation in place.)
* 
*/


const urlify = (str) => {
    return str.split(' ').join('%20')
}


console.log(urlify('hello all people') === 'hello%20all%20people'); 
console.log(urlify('Mr 3ohn Smith') === 'Mr%203ohn%20Smith'); 
console.log(urlify('two  spaces') === 'two%20%20spaces');
console.log(urlify('end space ') === 'end%20space%20'); 


const urlifyWithLoop = (str) => {
    const arr = [];

    for (let char of str) {
        arr.push(char === ' ' ? '%20' : char);
    }

    return arr.join('');
}

console.log(urlifyWithLoop('hello all people') === 'hello%20all%20people'); 
console.log(urlifyWithLoop('Mr 3ohn Smith') === 'Mr%203ohn%20Smith'); 
console.log(urlifyWithLoop('two  spaces') === 'two%20%20spaces');
console.log(urlifyWithLoop('end space ') === 'end%20space%20'); 


const urlifyWithLoopAndIndex = (str) => {
    let index = 0, spaces = 0;

    // get space count
    for (let char of str) {
        if (char === ' ') {
            spaces++;
        }
    }

    const newStringLength = str.length + (spaces * 3);
    const newArr = Array.from({ length : newStringLength });

    for (let i = 0; i < str.length; i++) {

        if (str[i] === ' ') {
            newArr[index] = '%'
            newArr[index + 1] = '2'
            newArr[index + 2] = '0'
            index += 3
        } else {
            newArr[index] = str[i]
            index += 1
        }
    }

    return newArr.join('');
}

console.log(urlifyWithLoopAndIndex('hello all people') === 'hello%20all%20people'); 
console.log(urlifyWithLoopAndIndex('Mr 3ohn Smith') === 'Mr%203ohn%20Smith'); 
console.log(urlifyWithLoopAndIndex('two  spaces') === 'two%20%20spaces');
console.log(urlifyWithLoopAndIndex('end space ') === 'end%20space%20'); 