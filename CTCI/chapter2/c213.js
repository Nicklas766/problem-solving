/**
 * 2.3 Delete Middle Node:
 * 
 * Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, 
 * not necessarily the exact middle) of a singly linked list, given only access to that node.
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

LinkedList.prototype[Symbol.iterator] = function () {

    let temp = new Node();
    temp.next = this.head;

    return {
        next: () => {

            if (temp.next !== null) {
                temp = temp.next;
                return { done: false, value: temp.value };
            }


            return { done: true, value: undefined };
        }
    }
}

// actually not the solution that was asked for
LinkedList.prototype.deleteMiddle = function () {

    let 
    temp = this.head,
    size = 0;

    // count size
    while (temp != null) {
        size++;
        temp = temp.next;
    }

   

    if (size == 2) return undefined

    const indexToBeRemoved = Math.floor(size/2);

    temp = this.head;

    for (let i = 1; i < size; i++) {
        if (i === indexToBeRemoved) {
            temp.next = temp.next.next;
            return;
        }

        temp = temp.next;
    }


}


const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);

list.deleteMiddle()
console.log(...list);
list.deleteMiddle()
console.log(...list);
list.deleteMiddle()
console.log(...list);
list.deleteMiddle()
console.log(...list);

list.deleteMiddle()
