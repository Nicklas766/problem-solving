/** 
 * 3.2 Stack Min:
 * 
 * How would you design a stack which, in addition to push and pop, has a function 
 * min which returns the minimum element? Push, pop and min should all operate in 0(1) time.
*/


function StackNode(value, minValue) {
    this.prev = null;
    this.value = value;
    this.minValue = minValue;
}


function Stack() {
    this.head = null;
}

Stack.prototype.push = function (value) {
    if (this.head === null) {
        this.head = new StackNode(value, value);
    }

    const minValue = this.head.minValue < value ? this.head.minValue : value;
    const node = new StackNode(value, minValue);
    node.prev = this.head;
    this.head = node;
}

Stack.prototype.pop = function () {
    const val = this.head.value;

    this.head = this.head.prev;
    return val;
}

Stack.prototype.getMin = function () {
    return this.head.minValue;
}


const stack = new Stack();

stack.push(1);
console.log(stack.getMin());
stack.push(2);
console.log(stack.getMin());
stack.push(0);
console.log(stack.getMin());
stack.push(4);
console.log(stack.getMin());


console.log(stack.pop());
console.log(stack.getMin());
console.log(stack.pop());
console.log(stack.getMin());


