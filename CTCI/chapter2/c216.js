/**
 * 2.6 Palindrome: 
 * 
 * Implement a function to check if a linked list is a palindrome
 * 
 */


function Node(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
}

LinkedList.prototype.insert = function (value) {
    this.size++;

    if (this.head === null) {
        this.head = new Node(value);
        this.tail = new Node(null);
    }
    else {
        let temp = this.head;

        while (temp.next !== null) {
            temp = temp.next;
        }
        
        temp.next = new Node(value);
        temp.next.prev = temp;
        this.tail.prev = temp.next;
    }
}


LinkedList.prototype.isPalindrome = function () {

    let temp1 = this.head, temp2 = this.tail.prev;
    
    for (let i = 0; i < Math.floor(this.size / 2); i++) {
        
        if (temp1.value !== temp2.value) {
            return false;
        }
        
        temp1 = temp1.next;
        temp2 = temp2.prev;
    }

    return true;
}

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(2);
list.insert(1);

console.log(list.isPalindrome())