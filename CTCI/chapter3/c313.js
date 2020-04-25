/** 
 * 3.3 Stack of Plates:  
 * 
 * Imagine a (literal) stack of plates. If the stack gets too high, it might topple. 
 * Therefore, in real life, we would likely start a new stack when the previous stack 
 * exceeds some threshold. Implement a data structure SetOfStacks that mimics this. 
 * SetOfStacks should be composed of several stacks and should create a new stack once 
 * the previous one exceeds capacity. SetOfStacks .push() and SetOfStacks .pop() should
 * behave identically to a single stack (that is, pop() should return the same values 
 * as it would if there were just a single stack). 
 * 
 * FOLLOW UP:
 * 
 * Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.
*/


function SetOfStacks(capacity) {
    this.stacks = [[]];
    this.capacity = capacity;
    this.currStackIndex = 0;
}

SetOfStacks.prototype.push = function (value) {
    if (this.stacks[this.currStackIndex].length === this.capacity) {
        this.currStackIndex++;
    } 

    if (this.stacks[this.currStackIndex] === undefined) {
        const newStack = [value];
        this.stacks.push(newStack);
    }
    else {
        this.stacks[this.currStackIndex].push(value);
    }
}

SetOfStacks.prototype.pop = function (value) {
    if (this.stacks[this.currStackIndex].length === 0) {
        this.currStackIndex--;
    } 
    
    return this.stacks[this.currStackIndex].pop();
}

SetOfStacks.prototype.popAt = function (index) {
    return this.stacks[index].pop();
}


const setOfStacks = new SetOfStacks(3);
setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(3);

console.log(setOfStacks);

setOfStacks.push(3);
setOfStacks.push(2);
setOfStacks.push(1);
console.log(setOfStacks);

setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(3);
console.log(setOfStacks);


setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
console.log(setOfStacks);

setOfStacks.pop();
setOfStacks.pop();
setOfStacks.pop();
console.log(setOfStacks);

setOfStacks.push(3);
setOfStacks.push(2);
setOfStacks.push(1);
console.log(setOfStacks);

setOfStacks.push(1);
setOfStacks.push(2);
setOfStacks.push(3);
console.log(setOfStacks);


setOfStacks.popAt(0);
setOfStacks.popAt(1);
setOfStacks.popAt(2);
console.log(setOfStacks);
