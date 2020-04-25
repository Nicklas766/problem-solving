/** 
 * 2.1 Remove Dups:
 * 
 * Write code to remove duplicates from an unsorted linked list. 
 * 
 * FOLLOW UP
 * 
 * How would you solve this problem if a temporary buffer is not allowed?
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

LinkedList.prototype.toString = function () {

    let
        temp = this.head,
        str = '';

    while (temp.next !== null) {
        str += temp.value + ', ';
        temp = temp.next;
    }

    str += temp.value;
    return '[' + str + ']';
}

LinkedList.prototype.removeDuplicatesWithBuffer = function () {

    let
        temp = this.head,
        prev = null,
        set = {};

    while (temp !== null) {
        if (set.hasOwnProperty(temp.value)) {
            prev.next = temp.next;
        }
        else {
            set[temp.value] = 1;
            prev = temp;
        }
        temp = temp.next;
    }
}

LinkedList.prototype.removeDuplicatesWithoutBuffer = function () {

    let
        temp = this.head,
        runner = null;

    while (temp !== null) {
        runner = temp;

        while (runner.next !== null) {

            if (runner.next.value === temp.value) {
                runner.next = runner.next.next;
            } 
            else {
                runner = runner.next;
            }
        }
        temp = temp.next;
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


const list = new LinkedList();

list.insert(1);
list.insert(1);
list.insert(2);
list.insert(2);
list.insert(3);
list.insert(3);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(5);

console.log(...list);

list.removeDuplicatesWithoutBuffer();

console.log(list + '');
console.log(...list);

