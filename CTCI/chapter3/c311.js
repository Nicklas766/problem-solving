/** 
 * 3.1 Three in One: 
 * 
 * Describe how you could use a single array to implement three stacks. 
 * First initial thought is that we can use the rear, front and middle of the array 
 * and keep track of all threes indexes to create three stacks with one array. If
 * we had a stack capacity then we can also keep remove and insert O(n) because we dont have to resize it.
 * 
*/

// ARRAY FROM START
// [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

// PUSH VALUE 3 TO STACK 1
// [undefined, undefined, 3, undefined, undefined, undefined, undefined, undefined, undefined]

// PUSH VALUE 2 TO STACK 1
// [undefined, 2, 3, undefined, undefined, undefined, undefined, undefined, undefined]

// PUSH VALUE 5 TO STACK 2
// [undefined, 2, 3, undefined, undefined, 5, undefined, undefined, undefined]

// POP VALUE FROM STACK 1
// [undefined, undefined, 3, undefined, undefined, 5, undefined, undefined, undefined]

function MultiStack(stackCapacity) {
    this.values = Array.from(Array(3 * stackCapacity), () => undefined);
    this.sizes = Array.from(Array(3), () => 0);
    this.stackCapacity = stackCapacity;
    this.amountOfStacks = 3;
}

MultiStack.prototype.getTopIndex = function (stackNumber) {
    return (stackNumber * this.stackCapacity) - this.sizes[stackNumber - 1];
}

MultiStack.prototype.push = function (stackNumber, value) {
    if (stackNumber > this.amountOfStacks || stackNumber < 1) {
        throw new Error('Must be 1 or 2 or 3.');
    }

    if (this.sizes[stackNumber - 1] === this.stackCapacity) {
        throw new Error('Its full!');
    }

    const index = this.getTopIndex(stackNumber);

    this.sizes[stackNumber - 1]++;
    this.values[index - 1] = value;
}

MultiStack.prototype.pop = function (stackNumber) {
    if (stackNumber > this.amountOfStacks || stackNumber < 1) {
        throw new Error('Must be 1 or 2 or 3.');
    }

    if (this.sizes[stackNumber - 1] === 0) {
        throw new Error('Its empty!');
    }

    const index = this.getTopIndex(stackNumber);
    const val = this.values[index];
    this.values[index] = undefined;
    this.sizes[stackNumber - 1]--;
    return val;
}

const myMultiStack = new MultiStack(3);

const stacks = {
    LEFT: 1,
    MIDDLE: 2,
    RIGHT: 3,
}


// Test errors for push
// Should throw error, too low
try { myMultiStack.push(0, 1) } 
catch (err) { console.log(err) }

// Should throw error, too high
try { myMultiStack.push(4, 1) } 
catch (err) { console.log(err) }

// Should throw error, since full
const myMultiStack1 = new MultiStack(3);
myMultiStack1.push(stacks.LEFT, 1)
myMultiStack1.push(stacks.LEFT, 1)
myMultiStack1.push(stacks.LEFT, 1)

try { myMultiStack1.push(stacks.LEFT, 1) } 
catch (err) { console.log(err) }

// Test pop erros

// Should throw error, since empty
const myMultiStack2 = new MultiStack(3);

try { myMultiStack2.pop(4) } 
catch (err) { console.log(err) }

try { myMultiStack2.pop(stacks.LEFT) } 
catch (err) { console.log(err) }


myMultiStack.push(stacks.LEFT, 1)
myMultiStack.push(stacks.LEFT, 1)
myMultiStack.push(stacks.LEFT, 1)

myMultiStack.push(stacks.MIDDLE, 2)
myMultiStack.push(stacks.MIDDLE, 2)
myMultiStack.push(stacks.MIDDLE, 2)

myMultiStack.push(stacks.RIGHT, 3)
myMultiStack.push(stacks.RIGHT, 3)
myMultiStack.push(stacks.RIGHT, 3)

console.log(myMultiStack);


// pop

const myMultiStackPop = new MultiStack(3);

myMultiStackPop.push(stacks.LEFT, 1)
myMultiStackPop.push(stacks.LEFT, 2)
myMultiStackPop.push(stacks.LEFT, 3)

myMultiStackPop.push(stacks.MIDDLE, 4)
myMultiStackPop.push(stacks.MIDDLE, 5)
myMultiStackPop.push(stacks.MIDDLE, 6)

console.log(myMultiStackPop.values)

console.log(myMultiStackPop.pop(stacks.LEFT) === 3)
console.log(myMultiStackPop.pop(stacks.MIDDLE) === 6)
console.log(myMultiStackPop.values)
console.log(myMultiStackPop.pop(stacks.LEFT) === 2)
console.log(myMultiStackPop.values)
console.log(myMultiStackPop.pop(stacks.LEFT) === 1)
