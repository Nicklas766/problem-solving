/**
 * 2.2 Return Kth to Last:
 * 
 * Implement an algorithm to find the kth to last element of a singly linked list.
 */


function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.counter = 0;
}

LinkedList.prototype.insert = function (value) {
    if (this.head === null) {
        this.head = new Node(value);
    }
    else {
        let temp = this.head;

        while (temp.next !== null) {
            temp = temp.next;
        }

        temp.next = new Node(value);
    }
}

// 212
LinkedList.prototype.kthToLast = function (k) {

    let
    curr = this.head,
    follower = this.head;

    for (let i = 0; i < k; i++) {
        
        curr = curr.next;
        if (curr === null) {
            return null;
        }
    }

    while (curr.next != null) {
        curr = curr.next;
        follower = follower.next;
    }

    return follower.value;
}

// 212
LinkedList.prototype.kthToLastKnowingSize = function (k) {

    let 
    temp = this.head,
    size = 0;

    // count size
    while (temp != null) {
        size++;
        temp = temp.next;
    }

    if (k >= size || k < 0) {
        return null;
    }

    temp = this.head;

    let index = 0;
    while(index < size - 1 - k) {
        index++;
        temp = temp.next;
    }

    return temp.value;
}

// 212
LinkedList.prototype.kthToLastWithRecursion = function kthToLastWithRecursion(k, node = this.head) {

    if (node === null) {
        return null;
    }

    return kthToLastWithRecursion(k, node.next); 
}

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

console.log(list.kthToLastWithRecursion(1))
console.log(list.kthToLastKnowingSize(-1))
console.log(list.kthToLastKnowingSize(0))
console.log(list.kthToLastKnowingSize(1))
console.log(list.kthToLastKnowingSize(2))
console.log(list.kthToLastKnowingSize(3))
console.log(list.kthToLastKnowingSize(4))
console.log(list.kthToLastKnowingSize(5))

console.log(list.kthToLast(1))
console.log(list.kthToLast(2))
console.log(list.kthToLast(3))
console.log(list.kthToLast(5))
console.log(list.kthToLast(10))
console.log(list.kthToLast(100))