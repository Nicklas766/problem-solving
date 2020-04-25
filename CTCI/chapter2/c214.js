/** 
 * 2.4 Partition:
 * 
 * Write code to  partition a linked list around a value x, such that all nodes 
 * less than x come before all nodes greater than or equal to x. 
 * 
 * If x is contained within the list, the values of x only  need  to  be after the elements less than x (see below).
 * The partition element x can appear anywhere in the "right partition"; it does not  need to  appear between  the left and  right partitions. 
 * 
 * ...
 * 
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

// alla noder som är lägre än x ska vara före alla noder som är större eller likamed x

LinkedList.prototype.partition = function (x) {
   
    let node = this.head,
    greater = new Node(0),
    less = new Node(0),
    head = less,
    tail = greater;

    while (node !== null) {

        if (node.value < x) {
            less.next = node;
            less = node;
        } else {
            greater.next = node;
            greater = node;
        }


        node = node.next;
    }


    greater.next = null;
    less.next = tail.next;
    return head;
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

list.insert(3);
list.insert(8);
list.insert(5);
list.insert(10);
list.insert(2);
list.insert(1);



console.log(...list);

list.partition(5);

console.log(...list);


const list2 = new LinkedList();

list2.insert(1);
list2.insert(4);
list2.insert(3);
list2.insert(2);
list2.insert(5);
list2.insert(2);

console.log(...list2);

list2.partition(3);

console.log(...list2);
